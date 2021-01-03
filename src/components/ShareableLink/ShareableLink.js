import React from 'react';
import {Button, Card} from "react-bootstrap";


const ShareableLink = () => {
    const url = window.location.href
    return (
        <Card className="mb-3">
        <Button 
        onClick={() =>  navigator.clipboard.writeText(url)}>
            Click Here to Copy and Share!
        </Button>
        </Card>
    )
}

export default ShareableLink

