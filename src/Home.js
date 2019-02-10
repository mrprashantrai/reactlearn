import React, { Component } from 'react';
import ButtonBases from './ButtonBases';
var Carousel = require('react-responsive-carousel').Carousel;


class Home extends Component{
render(){  
    return(
        <div className="Header">      
        <Carousel showThumbs={false}>
            <div>
                <img src="img/bg8.jpg" alt='img'/>
                {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div>
                <img src="img/bg8.jpg" alt='img'/>
                <p className="legend">Legend 1</p>
            </div>      
        </Carousel>
            <hr></hr>
        <ButtonBases />
        </div>
        );
    }
}

export default Home;