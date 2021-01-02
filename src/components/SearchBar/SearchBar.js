import React from 'react';
import {Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";

const SearchBar = (props) => {
    return (
    <Card className="mb-3">
        <Card.Header as="h5">Movie Title</Card.Header>
            <Form className='commentForm' onSubmit={ props.clickResponse }>
                <InputGroup>
                    <FormControl type='searchInput' 
                    className='search' 
                    placeholder={props.placeholder} 
                    onChange = {props.handleChange}
                    />
                    <InputGroup.Append>
                    <Button type='submit' variant="outline-primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form> 
    </Card>
   
    )



}

export default SearchBar;