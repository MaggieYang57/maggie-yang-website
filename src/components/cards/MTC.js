import React, { Component } from 'react'
import Popup from "reactjs-popup";
import mtc from '../../visuals/mtc.png'

export default class MTC extends Component {
    
    render(){
        return(
            <div>
                <Popup trigger = {
                    <div class="shadow-md rounded bg-white overflow-hidden cursor-pointer animate-fade">
                    <div class="grid max-h-64">
                        <div class="overflow-hidden">
                            <img class="object-cover h-64 w-full" src={mtc} alt='mtc'/>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="block md:flex justify-between">
                            <div>
                                <h3 class="font-medium tracking-wide">Meals That Connect - Scheduling Portal</h3>
                                <span class="text-sm text-gray-500">JS, HTML, CSS &bull; 6mo</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    } modal >
                {close => (
                    <div class="p-7 flex relative w-screen h-screen justify-center fixed left-0 top-0 bg-gray-900 bg-opacity-50 z-50 ">
                        <div class="flex flex-col-reverse top-0 bg-white rounded-lg w-3/4 max-h-full animate-fade overflow-auto">
                            <div>
                                <img class="object-cover h-64 w-full" src={mtc} alt='mtc'/>
                                <div class="p-7 flex justify-between">
                                    <p class="text-red-400 text-4xl font-montserrat font-semibold italic">Meals That Connect - Scheduling Portal</p>
                                    <svg onClick={() => {close();}} class="fill-current text-red-500 w-7 h-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                    </svg>
                                </div>
                
                                <div class="px-7">
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>Tools</p>
                                    <p class='font-monsterrat'>React.js, Node.js, Express, MongoDB, JavaScript, HTML, CSS</p><br/>
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>Duration</p>
                                    <p class='font-monsterrat'>6 months &bull; team of 8</p><br/>
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>The Story</p>
                                    <p class='font-monsterrat'>Meals that Connect provides free, hot meals to around 1,800 seniors throughout San Luis Obispo, as well as offering a place for social contact. 
                                    Seniors gather together at dining rooms throughout the county to eat together, share stories and build friendships and for those who are unable to leave their homes, 
                                    Meals that Connect personally delivers hot meals. <br/><br/>
                                    With most of their organization being run on paper, Meals that Connect faces challenges in managing volunteers and routes for meal delivery. 
                                    We built a scheduling system to digitize the client intake process and provide routing information. 
                                    Major features include route visualization and assignment and volunteer sign-ups. </p>
                                    
                                </div>
                                <div class ='flex items-center justify-center space-between my-8'>
                                    <form action="https://github.com/hack4impact-calpoly/meals-that-connect">
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




