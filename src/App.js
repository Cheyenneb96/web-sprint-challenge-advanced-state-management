import React, { useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from './actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from 'react-redux';

const App = ({ fetchSmurfs, smurfs }) => {
  

  useEffect(() => {
    
    fetchSmurfs()
  }, [])

    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
}

const mapStateToProps = ({ smurfs }) => {
  return ({
      smurfs
  })
}

export default connect(mapStateToProps, {fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.