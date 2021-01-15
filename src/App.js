import React from 'react';

// import './App.css';
import Menu from './components/Menu';
import Body from './components/Body';
import About from "./components/About.1";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import {BrowserRouter, Route , Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Menu />
       <Switch>
       <Route path="/" exact component = {Body} />
       <Route path="/About" component = {About} />
       <Route path="/Resume" component = {Resume} />
       <Route path="/Contact" component = {Contact} />
       </Switch>
       {/* <Body /> */}
       
    </div>
    </BrowserRouter>
  );
}

export default App;



