import React from "react";
import { AgendaConsultoria } from "./../../ui-components";
import "@aws-amplify/ui-react/styles.css";
import {
    Grid,
    View,
    Card,
    useTheme
} from '@aws-amplify/ui-react';

export const AgendaConsultoriavdos = () => {
    const { tokens } = useTheme();
    // const [errors, setErrors] = useState({errorMessage: false});

    const handleOnSubmit = async (fields) => {
        const event = new Date(fields['agendarConsulta']['start']);
        fields['agendarConsulta']['start'] = event.toString();
        console.log(fields)

    };

    const handleValidate = {
        agendarConsulta: {
            name: (value, validationResponse) => {
                // return validationResponse  

                console.log('VALUE::',value);
                console.log('validationResponse::',validationResponse);
                console.log(value)
                if(typeof value === 'undefined'){
                    console.log(value)
                    return {
                        hasError: true,
                        errorMessage: "Nombre es requerido"
                    }
                }else{
                    return {
                        hasError: false
                    }                   
                }                              
            }
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
                                }
                            }}
                        />
                    </View>
                </Grid>
            </Card>
        </View>

    );
}