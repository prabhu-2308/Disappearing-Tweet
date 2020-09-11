import React, { Component } from 'react';
import './App.css';

import { Card, CardFooter, CardBody, CardHeader} from 'reactstrap';


import ms1 from './ms1.jpg';
import ms3 from './ms3.jpg';
import ms4 from './ms4.jpg';
import ms5 from './ms5.jpg';
import ms6 from './ms6.jpg';
import ms7 from './ms7.jpg';
import ms8 from './ms8.jpg';
import ms9 from './ms9.jpg';

//import DISHES from './shared/dishes';



class Webp extends Component {
    render(){
        return(
            <div>
          
          <pre>         <b><ins>ENGLISH SONGS:</ins></b></pre>
          
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                  <a href="https://www.youtube.com/embed/bkx9kCdaaMg"><Card>
                  <CardHeader>
                      
                      <img src={ms1} width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>MIDNIGHT MEMORIES</CardBody>
                      <CardFooter><small>ONE DIRECTION</small></CardFooter>
                  </Card>
                  </a>
                  
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/X2BYmmTI04I">
                  <Card>
                      <CardHeader>
                      
                          <img src={ms3} width="100%" alt="loading"/>
                          </CardHeader>
                      <CardBody>SHE LOOKS SO PERFECT
                      
                      
                      </CardBody>
                      <CardFooter><small>5 SECONDS OF SUMMER</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/e-ORhEE9VVg">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms5} height="213px" width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>BLANK SPACE </CardBody>
                      <CardFooter><small>TAYLOR SWIFT</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                  <a href="https://www.youtube.com/embed/Rw51atxA-Jg">
                  <Card>
                  <CardHeader>
                  
                      <img src={ms4} width="100%" alt="loading"/>
                      
                      </CardHeader>
                      <CardBody>4 HOURS PEACEFUL PLAYLIST</CardBody>
                      <CardFooter><small>RELAX CHILLOUT MUSIC</small></CardFooter>
                  </Card></a><br/>
                  </div>

              </div>
          </div>
            
 <pre>          <b><ins>HINDI SONGS:</ins></b></pre>

<div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/Vx7YkKpt-J4">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms6} width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>CHIDIYA</CardBody>
                      <CardFooter><small>VILEN</small></CardFooter>
                  </Card></a>
                  
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/0VwgpYJ4q38">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms7} height="213px" width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>URVASHI
                      
                      
                      </CardBody>
                      <CardFooter><small>HONEY SINGH</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/PAW_Gd3QVww">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms8} height="213px" width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>LAAL BINDI </CardBody>
                      <CardFooter><small>AKULL</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/koCIa6kGRsw">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms9} width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>EXCUSE ME GIRL</CardBody>
                      <CardFooter><small>ARJUN FT. REKHA SAWHNEY</small></CardFooter>
                  </Card></a> <br/>
                  </div>
              </div>
          </div>
         
               
      





          </div>


        )
    }


}
export default Webp;