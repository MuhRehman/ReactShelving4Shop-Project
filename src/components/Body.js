import React from 'react';
import $ from 'jquery';
import '../components/Body.css';
// import logo2 from './img/2.jpg';
import logo2 from './img/black1.png';
import logogit from './img/github-logo.png';
import logolink from './img/linkedin.png';
import logoinstr from './img/instagram.png';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';


  
 const  textstyle = {
 color:"white",
    fontSize: "42px"
 };




const  Body =  () => {

  

    return (
        <div className="main-home">
        <div className="container">
             
        <h1>Home</h1>
        </div>
        </div>
   
    )
}

export default Body;