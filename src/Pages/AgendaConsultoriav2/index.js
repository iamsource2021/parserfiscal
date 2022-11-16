import React, { useState } from "react";
import { AgendaConsultoria } from "./../../ui-components";
import "@aws-amplify/ui-react/styles.css";
import {
    Grid,
    View,
    Card,
    useTheme,
    Alert
} from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listScheduleds } from './../../graphql/queries';
import { createScheduledCustom } from './../../graphql/mutations';

export const AgendaConsultoriavdos = () => {
    const { tokens } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [alertAlias,setAlertAlias] = useState({
        isAlertVisible:false
    });

    const AlertAlias = (props) => {
        return (
            props.props.isAlertVisible ?
            <Alert 
                variation={props.props.variation}
                isDismissible={true}
                hasIcon={true}
                heading={props.props.heading}
            >
                {props.props.content}
            </Alert>  : null           
        )
    }

    const handleOnSubmit = async (fields) => {
        setIsLoading(true);
        const event = new Date(fields['agendarConsulta']['start']);
        fields['agendarConsulta']['start'] = event.toString();
        const scheduleds = await API.graphql(graphqlOperation(listScheduleds,
            {
                filter: {
                    email: { eq: fields['agendarConsulta']['email'] }
                }
            }
        ));

        const countScheduleds = scheduleds.data.listScheduleds.items?.length;
        console.log("countScheduleds::",countScheduleds);
        if (countScheduleds <= 0) {
            const result = await API.graphql(graphqlOperation(createScheduledCustom, fields['agendarConsulta']));
            console.log("result::",result)
            setIsLoading(false);
            const _content = 'Se envio notificacion a '+
            fields['agendarConsulta']['email'] + 
            ' con liga de meeting con horario: '+
            event.toLocaleTimeString() + ", fecha: " + 
            event.toLocaleDateString('es-ES') + '...';

            setAlertAlias({
                variation:'success',
                heading:'Disponible!',
                content:_content,
                isAlertVisible:true            
            })            
        }else{

            setIsLoading(false);
            setAlertAlias({
                variation:'warning',
                heading:'No disponible!',
                content:'En este horario es complicado te sugiero intentar con la siguiente hora ...',
                isAlertVisible:true            
            })

        }

    };

    
    return (
        <View padding={tokens.space.xxxl} paddingTop="150px">
            <Card variation="elevated" padding="1rem">
                <Grid templateColumns={{ base: "1fr", medium: "1fr" }} textAlign="center">
                    <View>
                        <AgendaConsultoria 
                            onSubmit={handleOnSubmit}
                            overrides={{
                                "agendarConsulta.name":{                                    
                                    isRequired:true                          
                                },
                                "agendarConsulta.email":{                                    
                                    isRequired:true                          
                                },
                                "agendarConsulta.mobile":{                                    
                                    isRequired:true                          
                                },
                                "agendarConsulta.start":{                                    
                                    isRequired:true                          
                                },
                                "SubmitButton":{
                                    isLoading:isLoading,
                                    loadingText:"Loading..."
                                }                                
                            }}
                        />
                    <AlertAlias props={alertAlias}/>        
                    </View>
                </Grid>
            </Card>
        </View>

    );
}