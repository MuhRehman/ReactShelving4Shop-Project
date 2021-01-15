import React from 'react';
import logo1 from '../logo/default/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import "./Menu.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import "./custom.js";
import Button from 'react-bootstrap/Button';
// import { NavItem, Navbar, MenuItem, Nav ,NavDropdown  } from 'react-bootstrap';

// import { useEffect, useState,useRef } from "react";
// import 'bootstrap/dist/js/bootstrap.js';
import {Link} from 'react-router-dom';




const divStyle = {
    // paddingRight: "1px !important",
    // paddingLeft: "1px !important",
   
  };

const divStyle1 = {
  //  margineLeft: "14px !important",
  //  color:"black !important"
  };
const Menu = () => {
  
    return (


        <div  className="rehman">

      <nav className="navbar navbar-expand-lg navbar-dark bg-white rounded">
    <div className="container">
           
    <Link className="navbar-brand" to="/" href="#">
    <img src={logo1} width="300" height="auto" />

    </Link>
   


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
  <ul style={{ ...divStyle1,...{}}} className="navbar-nav ml-auto">
    <li style={{ ...divStyle,...{ marginLeft:"12px",}}}  className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">

  <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/" className="nav-link active">MY ACCOUNT </Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Resume" className="nav-link active ">SIGN IN</Link>
    </li>

    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/About"  className="nav-link active ">CHECKOUT</Link>
    </li>
    
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
 

    <div data-block="minicart" className="minicart-wrapper active">
        <a className="action showcart active" onClick={(e) => this.logout(e)} href="checkout/cart/index.html" data-bind="scope: 'minicart_content'">
           <h3> 
            <span className="icon-box"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
            My Cart:</h3>
        <span className="empty" data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading">
    <span>

    </span>
    <span data-bind="html: getCartParam('subtotal')"></span>
</span>
        
    </a>

    </div>












  </ul>
  </div>
  </div>
</nav>
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-white rounded">
    <div className="container">
           
   


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
  <ul style={{ ...divStyle1,...{}}} className="navbar-nav navbar-nav-custom sf-menu m-auto">
    <li   className="nav-item " data-toggle="collapse" data-target=".navbar-collapse.show">

  <Link  to="/" className="nav-link nav-link-custom active">MY ACCOUNT </Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Resume" className="nav-link active ">SIGN IN</Link>
    </li>

    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/About"  className="nav-link active ">CHECKOUT</Link>
    </li>
    
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <li className="nav-item mr-2 ml-2" data-toggle="collapse" data-target=".navbar-collapse.show">
    <Link style={{ ...divStyle,...{fontSize:"10px",color:"black"}}} to="/Contact" className="nav-link active"> BLOG</Link>
    </li>
    <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>














  </ul>
  </div>
  </div>
</nav>
  
        </div>
    )
}
 

export default Menu;