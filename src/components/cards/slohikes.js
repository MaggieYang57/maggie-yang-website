import React, { Component } from 'react'
import Popup from "reactjs-popup";
import slo from '../../visuals/slohikes.png'

export default class Slohikes extends Component {
    
    render(){
        return(
            <div>
                <Popup trigger = {
                    <div class="shadow-md rounded bg-white overflow-hidden cursor-pointer animate-fade">
                    <div class="grid h-64">
                        <div class="overflow-hidden">
                            <img class="object-cover h-64 w-full" src={slo} alt='slohikes'/>
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="block md:flex justify-between">
                            <div>
                                <h3 class="font-medium tracking-wide">SLO Hikes</h3>
                                <span class="text-sm text-gray-500">JS, HTML, CSS &bull; 6mo</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    } modal >
                {close => (
                    <div class="p-7 flex relative w-screen h-screen justify-center fixed left-0 top-0 bg-gray-900 bg-opacity-50 z-50 ">
                        <div class="items-start top-0 bg-white rounded-lg w-3/4 relative max-h-full animate-fade overflow-auto">
                            <div>
                                <img class="object-cover h-64 w-full" src={slo} alt='slohikes'/>
                                <div class="p-7 flex justify-between">
                                    <p class="text-red-400 text-4xl font-montserrat font-semibold italic">SLO Hikes</p>
                                    <svg onClick={() => {close();}} class="fill-current text-red-500 w-7 h-7 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                    </svg>
                                </div>
                
                                <div class="px-7">
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>Tools</p>
                                    <p class='font-monsterrat'>React.js, Node.js, Express, MongoDB, JavaScript, HTML, CSS</p><br/>
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>Duration</p>
                                    <p class='font-monsterrat'>6 months &bull; team of 4</p><br/>
                                    <p class='text-red-400 text-2xl font-montserrat font-semibold'>The Story</p>
                                    <p class='font-monsterrat'>A user-friendly web app for people to find accurate information and reviews about hikes in San Luis Obispo county that can be filtered for one's personal needs.<br/><br/>
                                    Major features include CI/CD, login functionality, weather API, filter and search functionality, and saving hikes for the future. </p>
                                    
                                </div>
                                <div class ='flex items-center justify-center my-8'>
                                    <form action="https://github.com/MaggieYang57/CSC308-TeamB">
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