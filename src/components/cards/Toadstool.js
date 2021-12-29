import React, { Component } from 'react'
import Popup from "reactjs-popup";
import toad from '../../visuals/toad.png'
import toadvid from '../../visuals/toadvid.mp4'

export default class Toadstool extends Component {
    
    render(){
        return(
            <div>
                <Popup trigger = {
                    <div class="shadow-md rounded bg-white overflow-hidden cursor-pointer animate-fade">
                    <div class="grid h-64">
                        <div class="overflow-hidden">
                            <img class="object-cover h-64 w-full" src={toad} alt='toadstool'/>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="block md:flex justify-between">
                            <div>
                                <h3 class="font-medium tracking-wide">Toadstool</h3>
                                <span class="text-sm text-gray-500">C++, OpenGL, GLFW, CMake &bull; 1mo</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    } modal >
                {close => (
                    <div class="p-7 flex relative w-screen h-screen justify-center fixed left-0 top-0 bg-gray-900 bg-opacity-50 z-50 ">
                        <div class="items-start top-0 bg-white rounded-lg w-3/4 relative max-h-full animate-fade overflow-auto">
                            <div>
                                {/* <source class="object-cover h-64 w-full" src={toadvid} type='video/mp4'/> */}
                                <video class="object-cover h-64 w-full" controls>
                                    <source src={toadvid} type='video/mp4' alt='vid'/>
                                Your browser does not support the video tag.
                                </video>
                                <div class="p-7 flex justify-between">
                                    <p class="text-red-400 text-4xl font-montserrat font-semibold italic">Toadstool</p>
                                    <svg onClick={() => {close();}} class="fill-current text-red-500 w-7 h-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                    </svg>
                                </div>
                
                                <div class="px-7">
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>Tools</p>
                                    <p class='font-monsterrat'>C++, OpenGL, GLFW, CMake</p><br/>
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>Duration</p>
                                    <p class='font-monsterrat'>1 month</p><br/>
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>The Story</p>
                                    <p class='font-monsterrat'>A front-scrolling game where the user controls a frog that has to jump on top of mushrooms until it reaches the coveted water. The game will reset to the beginning if the frog's position is behind the camera or if it falls to the ground. The game ends when the frog reaches the water and can finally enjoy the view!<br/><br/>
                                    Applied concepts including collision detection, infinite terrain/skysphere, diffuse and specular lighting, texture/normal/height mapping, hierarchical modeling, billboard animations, and post-processing </p>
                                    
                                </div>
                                <div class ='flex items-center justify-center my-8'>
                                    <form action="https://github.com/MaggieYang57/Toadstool">
                                        <button type="submit" class='bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full'>View Github</button>
                                    </form>
                                    <button type="close" onClick={() => {close();}} class='text-red-400 hover:text-red-600 font-bold py-2 px-4 rounded-full'>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </Popup>
            </div>
        );
    }
}