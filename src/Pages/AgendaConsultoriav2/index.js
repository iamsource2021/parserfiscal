import { AgendaConsultoria } from "./../../ui-components";
import "@aws-amplify/ui-react/styles.css";
import {
    Grid,
    View,
    Card,
    useTheme
} from '@aws-amplify/ui-react';
import Validate from "./validate";

export const AgendaConsultoriavdos = () => {
    const { tokens } = useTheme();

    const handleOnSubmit = async (fields) => {
        const event = new Date(fields['agendarConsulta']['start']);
        fields['agendarConsulta']['start'] = event.toString();
        console.log(fields)
        // console.log(        )
    }

    return (
        <View padding={tokens.space.xxxl} paddingTop="150px">
            <Card variation="elevated" padding="1rem">
                <Grid templateColumns={{ base: "1fr", medium: "1fr" }} textAlign="center">
                    <View>
                        <AgendaConsultoria
                            onSubmit={handleOnSubmit}
                            onValidate={{
                                isRequerid: (value, validationResponse) => {
                                    //     const firstWord = value.split("")[0];
                                    //     console.log(typeof(firstWord))
                                    //     if (firstWord) { // check if the first word is a number 
                                    //         return {
                                    //           hasError: true,
                                    //           errorMessage: "Address must start with a number"
                                    //         } 
                                    //       }
                                    //       return validationResponse        
                                    // }     
                                    return {
                                        hasError: true,
                                        errorMessage: "Address must start with a number"
                                    }
                                }
                            }}
                        />
                    </View>
                </Grid>
            </Card>
        </View>

    );
}