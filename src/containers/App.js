import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import CardShow from "../components/CardShow";
import { Link } from "react-router-dom";
import { setSearchField } from '../actions';
import { connect } from 'react-redux';

// -------------------------------------------------------REDUX part
const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}
const mapDispatchProps = (dispatch) => {
  return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

// ---------------------------------------------------------
class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
      
    }
  }

  componentDidMount() {
    fetch('https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.json')
      .then(response=> response.json())
      .then(countries => {
        this.setState({
          countries 
        })
    });
  }


  render() {
    const { countries } = this.state;
    const { searchField , onSearchChange} = this.props;
    const filteredCountries = countries.filter(country =>{
      return country.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !countries.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Countries</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList countries={filteredCountries} />
          </Scroll>          
        </div>
        
      );
  }
}

// ---------------------------------REDUX get connected to APP
export default connect(mapStateToProps, mapDispatchProps)(App);




