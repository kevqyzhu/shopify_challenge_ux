import React, { Component } from 'react';
import {  Button, ListGroup, Card } from "react-bootstrap";

class Nominations extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Card className="mb-3" >
          <Card.Header as="h5">Your Nominations</Card.Header>
          {this.props.nominations.length === 0 ?  (
            <Card body>No nominations</Card>
          ) : (
              this.props.nominations.map(function(d, idx){
                return (
                <ListGroup variant="flush">
                  <ListGroup.Item as="li" className='nominations' key={idx}>
                      {d.Title} ({d.Year}) 
                      <Button variant="outline-danger" size="sm" style={{float: 'right'}} onClick = { (e) => { e.preventDefault(); this.props.deleteNomination(idx); } }>Delete</Button>
                  </ListGroup.Item>
                </ListGroup>
                )
                }, this)
          )}
        </Card>
        )

    }

    
}

export default Nominations;