import React from 'react';
import { Card } from 'react-bootstrap'


const SingleBook = ({ book :{ img, title } })=> {
    return(
        <Card className="m-2">
            <Card.Img 
                
                variant="top"
                src={ img } />
            <Card.Body>
                <Card.Title as="h3">{ title }</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SingleBook