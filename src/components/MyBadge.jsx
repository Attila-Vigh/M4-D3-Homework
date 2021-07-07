import React from 'react';
import { Badge } from 'react-bootstrap';


const MyBadge = ({ text, color })=>{
    const styleMyBadge = {
        backgroundColor: color,
        padding: "10px",
        borderRadius: "4px",
    }
    return (
        <div>
            <h2>
                <Badge style={ styleMyBadge }>{text}</Badge>
            </h2>
        </div>
    )
}
export default MyBadge