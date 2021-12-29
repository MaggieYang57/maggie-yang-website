import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Interests from '../components/Interests';
import Developer from '../components/Developer';
import Designer from '../components/Designer';
import face from '../visuals/headshot.jpg';

export default class About extends Component {
    render(){
        return (
            <div class='pt-12 pb-36' id='about'>
                <div class='grid grid-cols-2 place-items-center justify-items-center content-center' >
                        <img class="object-contain h-96 w-96 pl-1/2" src={face} alt='face'/>
                    <div class='content-center'>
                        <h1 className="text-red-400 text-4xl font-montserrat font-semibold tracking-wide">about me !</h1>
                        <p className="font-montserrat pt-3">I'm Maggie Yang, a current undergraduate student studying Software Engineering with a minor in Computing for Interactive Arts at California Polytechnic State University - San Luis Obispo.
                        <br/><br/>Since my introduction to coding when I was 10 years old, I have continuously striven to make meaningful projects. With my extensive background in visual arts, my goal is to be involved with front-end development and to design beautiful yet functional user experiences.</p>
                    </div>
                </div>
                <div class ='flex items-center justify-center pt-24 space-x-12'>
                <Designer/>
                <Developer/>
                <Interests/>
                </div>
            </div>
        );
    }
}