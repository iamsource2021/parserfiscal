import React, {useState} from 'react';
import { Heading, Content } from './styles';
const AgendaConsultoria = () =>{
    const [visible, setVisible] = useState(false);
    return (
        <>
        <Content>
            <Heading>
                Hola desde  AgendaConsultoria
            </Heading> 
        </Content>       
        </>

    );        
}

export default AgendaConsultoria;