import React from 'react';
import { Alert } from 'react-bootstrap'

const WarningSign = ({ textAlert })=> {
    const stylesAlert = {
        backgroundColor: "#00ff37",
        border: "1px solid red",
        margin: "15px",
        borderRadius: "10px",
        
    }
    return(
        <Alert variant="success" style={stylesAlert}>
                <Alert.Heading as="h2">Bootstrap!!! This is Sparta!!! </Alert.Heading>
                <p>
                    { textAlert }
                </p>
                <hr />
                <p className="mb-0">
                    Stupind variant does not work!
                </p>
            </Alert>
    )
}

export default WarningSign