import React from 'react';
import Add from './components/Add';
import Record from './components/Record';
import Home from './components/Home';
import Update from './components/Update';
import { BrowserRouter, BrowserRouter as Router,Route,Switch } from  "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/Home/UpdateData" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Update/edit" component={Update}/>
        <Route path="/AddRecord" component={Add}/>
        <Route path="/" component={Home}/>
           
      </Switch>
      </BrowserRouter> 
      
      {/* <Record /> */}
      {/* <Update/> */}
    </>
  );
}

export default App;
