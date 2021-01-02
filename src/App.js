import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ResultsBox from './components/Results/ResultsBox'
import Nominations from './components/Nominations/Nominations';
import { Jumbotron, Col, Container, Row } from "react-bootstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField:"",
      searchResults: [],
      nominations: JSON.parse(localStorage.getItem('nominations')) || []

    }
  }

  fetchData() {
    const url = 'http://www.omdbapi.com/?type=movie&apikey=588d0c13&s='+ this.state.searchField
    fetch(url).then(response => response.json())
    .then(
      data =>
        this.setState({searchResults: data.Search}));
  }

  addNomination = (pick) => {
    const nomination = [pick]
    this.setState({
      nominations: this.state.nominations.concat(nomination)
    },() => {
      localStorage.setItem('nominations', JSON.stringify(this.state.nominations))
    });
  
  }
  

  deleteNomination = (index) => {
    var array = [...this.state.nominations]; // make a separate copy of the array
    if (index !== -1) {
    array.splice(index, 1);
    this.setState({nominations: array}, () => {
      localStorage.setItem('nominations', JSON.stringify(this.state.nominations))
    });
  }
  }

  render() {
    return (
      <Jumbotron fluid>
        <Container fluid="md"> 
          <h1>The Shoppies!</h1>
          <Row>
            <Col>
            <SearchBar placeholder="Enter movie info..." handleChange={(e) => this.setState({searchField:e.target.value})} clickResponse = { (e) => { e.preventDefault(); this.fetchData(); } }/>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <ResultsBox results = {this.state.searchResults} nominations = {this.state.nominations} nominate = {  this.addNomination }/>
            </Col>
            <Col md={6}>
            <Nominations nominations = {this.state.nominations} deleteNomination = { this.deleteNomination}/>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default App;