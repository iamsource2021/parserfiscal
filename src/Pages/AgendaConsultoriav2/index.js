import { AgendaConsultoria } from "./../../ui-components";
import "@aws-amplify/ui-react/styles.css";
import {
    Grid,
    View,
    Heading,
    Alert,
    Loader,
    TextField,
    useTheme
} from '@aws-amplify/ui-react';

export const AgendaConsultoriavdos = () => {
    return (
        <Grid templateColumns={{ base: "1fr", medium: "1fr" }} textAlign="center">
            <View marginTop="120px" >
                <AgendaConsultoria />
            </View>
            
        </Grid>
        
    );
}