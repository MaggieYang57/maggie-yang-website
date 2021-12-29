import React, { Component } from 'react'

export default class Designer extends Component {
    render(){
        return (
            <div class="font-montserrat flex flex-col items-center justify-center bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800">
                    <h2 class="pb-4 font-semibold font-medium text-2xl text-gray-900 dark:text-white">designer</h2>
                    <p class="pb-4 text-center">I love applying my background in traditional arts to create accessible designs for UX/UI/Animation</p>
                    <p class="text-lg font-medium text-red-400 dark:text-white tracking-wide">design tools</p>
                    <p>Illustrator</p>
                    <p>Photoshop</p>
                    <p>InDesign</p>
                    <p>AfterEffects</p>
                    <p>Figma</p>
                    <p>Wix</p>
                    <p>Blender</p>     
            </div>
        );
    }
}
