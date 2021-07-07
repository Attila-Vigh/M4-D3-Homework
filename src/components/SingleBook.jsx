import React from 'react';
import { Card } from 'react-bootstrap'


const SingleBook = ({ book :{ img, title } })=> {
    return(
        <Card >
            <Card.Img variant="top" style={{ width: '18rem' }} src={ img } />
            <Card.Body>
                <Card.Title as="h3">{ title }</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SingleBook