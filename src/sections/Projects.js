import React, { Component } from 'react'
import MTC from '../components/cards/MTC';
import Slohikes from '../components/cards/slohikes';
import Toadstool from '../components/cards/Toadstool';

export default class Projects extends Component {
    render(){
        return (
            <div class='pt-12 pb-48'  id ="projects">
                <div class="flex flex-col items-center justify-center">
                    <h1 className="text-red-400 text-4xl font-montserrat font-semibold tracking-wide">some projects !</h1>
                    <div class="p-12 grid grid-cols-1 gap-8">
                        <MTC/>
                        <Slohikes/>
                        <Toadstool/>
                    </div>
                </div>
            </div>
        );
    }
}


