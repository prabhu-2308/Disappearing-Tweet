import React, { Component } from 'react';
import './App.css';

import {Button} from 'reactstrap';
import art6 from './art6.jpg';
import art7 from './art7.png';


import { NavLink } from 'react-router-dom';
//import Webp from './Webp';
//import Categ from './Categ';


class Header extends Component {
    render(){
        return(
         
        
               
               <div>
          <div className="App">
          
              <div className="cent">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-9">
                         <h4 className="cent"><b><mark>Music Industry</mark></b></h4>
              </div>
              <div className="col-md-3">
              Search:<input type="text"/>
              </div>
              </div>
              </div>
              <hr style={{border:"1px dotted white"}}/>
             <NavLink to="/"> <Button bsStyle="success">Home</Button></NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <NavLink to="/c"><Button bsStyle="success">Categories</Button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink to="b"><Button bsStyle="success">Blog</Button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button bsStyle="success">Styles</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button bsStyle="success">About</Button><br/>
              
              </div><hr style={{border:"1px dotted white"}}/>
           
    
              <div className="container">
                  <div className="row">
                      <div className="col-md-2">
                     <b><ins>Musical Genre</ins></b><br/>
                     <ul>
                         <li>Jass</li><br/>
                         <li>Pop</li><br/>
                         <li>Rock</li><br/>
                         <li>Classical</li><br/>
                         <li>Orchestra</li>
                         
                         
                     </ul>
                      </div>
                      <div className="col-md-7">
                          <img className="opa" src={art6} opacity="0.2" height="100%" width="100%" alt="loading"/>
                      </div>
                      <div className="col-md-3">
                          <img className="opa" src={art7} width="100%" height="100%" alt="loading"/>
                      </div>
                      
                  </div>
              </div><hr style={{border:"1px dotted white"}}/>
              </div>
              </div>
        )
}
}  
export default Header;