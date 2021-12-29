import React, { Component } from 'react';
import {Link} from "react-scroll";

export default class Navigation extends Component {
    render(){
        return (
            <div class='fixed static bg-white w-full pt-4 h-12 text-xl'>
                <div class='float-left cursor-pointer'>
                <Link 
                    id='nav'
                    activeClass="active" 
                    to="welcome" 
                    spy={true} 
                    smooth={true} 
                    duration={500} class='left-0 active:bg-red-300'>
                    MY
                </Link>
                </div>
                <div class='float-right pr-24 '>
                    <ul class='flex'>
                    <li class='cursor-pointer ml-4'>
                        <Link 
                            id='nav'
                            activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} >
                            about
                        </Link>
                    </li>
                    <li class='cursor-pointer ml-4'>
                        <Link 
                            id='nav'
                            activeClass="active" 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} class='active:text-red-400'>
                            projects
                        </Link>
                    </li>
                    <li class='cursor-pointer ml-4'>
                        <Link 
                            id='nav'
                            activeClass="active" 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            duration={500} class='cursor-pointer'>
                            connect
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}