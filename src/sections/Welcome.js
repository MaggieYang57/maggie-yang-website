import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

export default class Welcome extends Component {
    render(){
        return (
            <div class='pt-12' id ="welcome">
            <div class="py-48 items-left justify-left" >
                <Fade delay={500}>
                <h2 className="font-montserrat tracking-widest">hi, i'm Maggie Yang, a</h2>
                </Fade>
                <Fade delay={2000}>
                <h1 className="text-red-400 text-6xl font-montserrat font-bold">frontend<br/> developer</h1>
                </Fade>
                <Fade delay={3000}>
                <p className="pt-2 font-montserrat tracking-widest">with some art on the side !</p>
                </Fade>
            </div>
            </div>
        );
    }
}