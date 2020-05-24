import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => { //dispatch will be used to send an action towards reducer
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) //requestRobots returns a function, thus needs to be dispatched
  }
}

class App extends Component {
  render() {
        return <MainPage {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order function
//returns another function. connect will run, and whatever runs inside of it will return another function.
//so, subscribe to any store changes that will happen inside of App
//mapstatetoprops & mapdispatchtoprops determine what App will listen to regarding changes to state.