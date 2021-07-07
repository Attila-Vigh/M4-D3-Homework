import React from 'react';
import { Alert } from 'react-bootstrap'

const WarningSign = ({ textAlert })=> {
    const stylesAlert = {
        margin: "15px",
        borderRadius: "10px",
        
    }
    return(
        <Alert variant="success" className="m-5" >
            <Alert.Heading as="h2">Bootstrap!!! </Alert.Heading>
            <Alert.Heading as="h3"> This is Sparta!!! </Alert.Heading>
            <p> { textAlert } </p>
            <hr />
            <p className="mb-0">
                Stupind variant did not work as we wanted!
            </p>
        </Alert>
    )
}

export default WarningSign