import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {FormGroup, FormControl, Button, Navbar, Nav } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker';
// import Date from 'react.date';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput:'',
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleChange({target}) {
    const newInfo = { [target.id]: target.value };
    this.setState({ userInput: [...this.state.userInput, newInfo] });
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state.userInput));
    event.preventDefault();
  }

  dateChange = date => {
		this.setState ({
			startDate: date
		});
  }
  

render() {
  return ( 
  <React.Fragment >
  <div className="Navbar">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Travel App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Create">Create</Nav.Link>
      <Nav.Link href="/Destinations">Destinations</Nav.Link> 
    </Nav>
    </Navbar>
  </div>
    <form className="fs-container" onSubmit={this.handleSubmit}>
      <FormGroup className="origin" >
      <label>
        From:
      </label>
        <FormControl
          type="text"
          placeholder="Origin"  
          value={this.state.value} 
          onChange={this.handleChange}          
        />
      </FormGroup>
      <FormGroup className="destination" >
      <label>
        To:
      </label>
        <FormControl 
          type="text"
          placeholder="Destination" 
          // value={this.state.value} 
          onChange={this.handleChange} 
        />
      </FormGroup>
      <DatePicker 
    
        placeholderText="Departure date"
        selected={ this.state.selectedDate }
        dropdownMode="select"
        showMonthDropdown
	      showYearDropdown
	      maxDate={ moment().add(10,'years')}
        minDate={ moment().subtract(10,'years')}
        dropdownMode="scroll"
        OnChange={this.dateChange}             
      />
      <DatePicker
        placeholderText="Return date" 
        selected={ this.state.selectedDate }
        dropdownMode="select"
        showMonthDropdown
	      showYearDropdown
	      maxDate={ moment().add(10,'years')}
        minDate={ moment().subtract(10,'years')}
        dropdownMode="scroll"
        OnChange={this.dateChange}            
      /> 
    </form>
    <Button
        type="submit"
        bsStyle="primary"
        style={{height: '46px'}}
      >
      {'Search'}
      </Button>
  </React.Fragment>
  );
}
}



export default Locations;
