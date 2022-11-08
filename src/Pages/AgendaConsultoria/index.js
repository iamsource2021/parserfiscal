import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import {
    Grid,
    View,
    Heading,
    Alert
} from '@aws-amplify/ui-react';
import "./index.css";
import '@aws-amplify/ui-react/styles.css';

const AgendaConsultoria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );

    const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
    };

    const handleCalendarClose = () => {
        console.log('handleCalendarClose', startDate);

    }
    const handleClickOutside = (e) => {
        e.preventDefault();
    };

    document.title = 'e - Agenda Consultoria.'


    return (
        <Grid templateColumns={{ base: "1fr", medium: "1fr" }} textAlign="center">
            <View height="60vh" marginTop="150px" >
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
                    <Alert
                        variation="info"
                        isDismissible={true}
                        hasIcon={true}
                        heading="Alert heading"
                    >
                        This is the alert message
                    </Alert>
                </View>
            </View>

        </Grid>
    );
}

export default AgendaConsultoria;