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
                                agendarConsulta: {
                                    name: (value, validationResponse) => {
                                        if(typeof value === 'undefined'){
                                            return {
                                                hasError: true,
                                                errorMessage: "Nombre es requerido"
                                            }
                                        }
                                        return validationResponse
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