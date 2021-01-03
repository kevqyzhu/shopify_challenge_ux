import React, { Component } from 'react';
import { Button, ListGroup, Card } from "react-bootstrap";

class ResultsBox extends Component {

    constructor(props) {
        super(props);
    }


    checkId = (imdbID) => {
        var containsId = null
        {! this.props.nominations ?(
            containsId = false
        ): (
            containsId = this.props.nominations.some(v => (v.imdbID === imdbID ))      
            
        )}
        console.log(Array.isArray(this.props.nominations))
        return(containsId)

    }

    render() {
        return(
            <Card className="mb-3" >
                    <Card.Header as="h5">Search Results</Card.Header>
              {!this.props.results || this.props.results.length === 0?  (
                  <Card body>No results</Card>
              ) : (
                  this.props.results.map(function(d, idx){
                    return (    
                        <ListGroup variant="flush">
                            <ListGroup.Item as="li" className='searchResults' key={idx}>
                                {d.Title} ({d.Year}) 
                                <Button variant="outline-secondary" size="sm" style={{float: 'right'}} 
                                disabled={ this.checkId(d.imdbID) || this.props.nominations.length === 5 } 
                                onClick = { (e) => { e.preventDefault(); this.props.nominate(this.props.results[idx]); } }>Nominate</Button>
                            </ListGroup.Item>
                        </ListGroup>
                        )
                    }, this)
              )}
              </Card> 
        )

    }

    
}

export default ResultsBox;