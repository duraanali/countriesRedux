import React, { Component } from 'react';
import Form from "./components/Form"
import './App.css';
import CountriesList from './components/CountriesList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  render() {

    return (
      <div className="App">
        <h2>WORLD COUNTRIES</h2>
        <Form />
        <CountriesList />
      </div>
    );
  
}
}
export default App;
