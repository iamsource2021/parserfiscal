import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import {
    Grid,
    View,
    Heading,
    Alert,
    Loader,
    TextField,
    useTheme
} from '@aws-amplify/ui-react';
import "./index.css";
import '@aws-amplify/ui-react/styles.css';

import { API, graphqlOperation } from 'aws-amplify';
import { listScheduleds } from './../../graphql/queries';
import { createScheduledCustom } from './../../graphql/mutations';
import { isValiEmail } from './valid';


const AgendaConsultoria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [variation, setVariation] = useState(null);
    const [heading, setHeading] = useState(null);
    const [content, setContent] = useState(null);

    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const [item, setItem] = useState({name:'',email:'',mobile:'',start:''});
    const { tokens } = useTheme();
    const [hasError, setHasError] = React.useState(false);

    const AlertAlias = () => {
        return (
            <Alert
                variation={variation}
                isDismissible={true}
                hasIcon={true}
                heading={heading}
            >
                {content}
            </Alert>
        )
    }

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
    };


    const handleCalendarClose = async () => {
        setIsLoaderVisible(true);
        setIsAlertVisible(false);
        item['start'] = startDate.toString();
        setItem(item);
        // here code API amplify  
        const scheduleds = await API.graphql(graphqlOperation(listScheduleds,
            {
                filter: {
                    email: { eq: item['email'] }
                }
            }
        ));

        const countScheduleds = scheduleds.data.listScheduleds.items?.length;
        if (countScheduleds <= 0) {
            const result = await API.graphql(graphqlOperation(createScheduledCustom, item));
            setIsLoaderVisible(false);
            setIsAlertVisible(true);
            setVariation('success');
            setHeading('Se guardo con exito!');
            setContent('Se Agendo ');
        }
        else {
            setIsLoaderVisible(false);
            setIsAlertVisible(true);
            setVariation('error');
            setHeading('Fallo al guardar!');
            setContent('No se pudo agendar');
        }
    }

    const handleClickOutside = (e) => {
        e.preventDefault();
    };

    document.title = 'e - Agenda Consultoria.'

    return (
        <Grid templateColumns={{ base: "1fr", medium: "1fr" }} textAlign="center">
            <View marginTop="150px" >
                <Heading
                    level={5}
                    variation="info"
                    color="#ffffff"
                    marginBottom="medium"
                >
                    * Nombre :
                </Heading>
                <TextField
                    placeholder="Nombre"
                    errorMessage="
                    There is an error"
                    direction="row"
                    alignItems="baseline"
                    fontSize={tokens.fontSizes.xl}
                    justifyContent="center"
                    backgroundColor="white"                    
                    onChange={(e) =>{
                            item['name'] = e.currentTarget.value;
                            setItem(item);
                        }
                    } 
                    required={true}           
                />
            </View>
            <View marginTop="10px" >
                <Heading
                    level={5}
                    variation="info"
                    color="#ffffff"
                    marginBottom="medium"
                >
                    * E-mail :
                </Heading>
                <TextField
                    placeholder="E-mail"
                    hasError={hasError}
                    errorMessage="There is an error"
                    direction="row"
                    alignItems="baseline"
                    fontSize={tokens.fontSizes.xl}
                    justifyContent="center"
                    backgroundColor="white"
                    onChange={(e) =>{
                        item['email'] = e.currentTarget.value;
                        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        const containsDigit = regEmail.test(item['email']);
                        setHasError(!containsDigit);
                        setItem(item);
                        }                    
                    } 
                    required={true}                    
                />
            </View>    
            <View marginTop="10px" >
                <Heading
                    level={5}
                    variation="info"
                    color="#ffffff"
                    marginBottom="medium"
                >
                    * Telefono :
                </Heading>
                <TextField
                    placeholder="Telefono"
                    errorMessage="There is an error"
                    direction="row"
                    alignItems="baseline"
                    fontSize={tokens.fontSizes.xl}
                    justifyContent="center"
                    backgroundColor="white"
                    onChange={(e) =>{
                        item['mobile'] = e.currentTarget.value;
                        setItem(item);
                    }} 
                    required={true}
                />
            </View>                      
            <View height="60vh" marginTop="10px" >
                <Heading
                    level={5}
                    variation="info"
                    color="#ffffff"
                    marginBottom="medium"
                >
                    Elije Fecha y Hora
                </Heading>
                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    onCalendarClose={handleCalendarClose}
                    timeInputLabel="Hora:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeSelect
                    popperPlacement="auto"
                    shouldCloseOnSelect={true}
                    onClickOutside={handleClickOutside}
                    excludeTimes={[
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 30), 18),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 30), 17),
                    ]}
                    minTime={setHours(setMinutes(new Date(), 0), 9)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                >
                </DatePicker>
                <View margin="2rem">
                    {isAlertVisible ? (
                        <AlertAlias />
                    ) : null}
                    {isLoaderVisible ? (<Loader variation="linear" />) : null}
                </View>
            </View>

        </Grid>
    );
}

export default AgendaConsultoria;