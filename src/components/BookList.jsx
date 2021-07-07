import React from 'react';
import SingleBook from './SingleBook';
import { Container, Row } from 'react-bootstrap'


function BookList({ listOFBooks }) {
    
    return (
        <Container> 
            <Row xs={1} md={5} className="g-4">
                { 
                    listOFBooks.map( book  => 
                        
                        <SingleBook 
                            key={book.asin} 
                            book={ book }
                        />
                    )
                }
            </Row>
        </Container>
        
            
    );
}



export default BookList;
