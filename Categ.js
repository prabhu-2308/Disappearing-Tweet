import React, { Component } from 'react';
import './App.css';



//import 'font-awesome/css/font-awesome.css';
//import { BrowserRouter, Route , Switch , NavLink } from 'react-router-dom';

//import DISHES from './shared/dishes';
//import Webp from './Webp';
//import Header from './Header';
//import { BrowserRouter } from 'react-router-dom';



class Categ extends Component {
    render(){
        return(
            
          <div>
        <div class="container">
            <div class="row">
               <div class="col-md-4">
               <div class="box">
               <h3 align="left"><b><ins>Jazz</ins></b></h3>
               <ul>
                  <li>
              <small>Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, with its roots in blues and ragtime.</small>
              </li>
              </ul><br/>
              <br/><br/>
               </div>
              <br/><br/><br/>
              <div class="box">
              <h3 align="left"><b><ins>Classical</ins></b></h3>
              <ul>
                  <li>
                      <small>
                          Indian classical music is the classical music of the Indian subcontinent, this includes India, Pakistan, Bangladesh, Sri Lanka and Nepal. It has two major traditions: the North Indian classical music tradition is called Hindustani, while the South Indian and Sri Lankan expression is called Carnatic.
                      </small>
                  </li>
              </ul>
              </div>



               </div>
               <div class="col-md-4">
             <div class="box">
               <h3 align="left"><b><ins>Pop</ins></b></h3>
               <ul>
                  <li>
              <small>Pop is a genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom. The terms "popular music" and "pop music" are often used interchangeably, although the former describes all music that is popular and includes many disparate styles.</small>
              </li>
              </ul></div><br/><br/><br/>
              <div class="box">
              <h3 align="left"><b><ins>Orchestra</ins></b></h3>
              <ul>
                  <li>
                      <small>
                      Classical music is art music produced or rooted in the traditions of Western culture, including both liturgical and secular music.
                      </small>
                  </li>
              </ul><br/><br/><br/><br/>
</div>
    





               </div>
               
               <div class="col-md-4">
                   <div class="box">
               <h3 align="left"><b><ins>Rock</ins></b></h3>
              <ul>
                  <li>
                      <small>Rock music is a broad genre of popular music that originated as "rock and roll" in the United States in the late 1940s and early 1950s, and developed into a range of different styles in the mid-1960s and later, particularly in the United States and the United Kingdom.</small>
                  </li>
              </ul>
              <br/>
            </div>
               <br/><br/>
               </div>
            </div>
        </div>
              
              
              
              
            
            
                      
              
              </div>
              
        )
}
}
export default Categ;