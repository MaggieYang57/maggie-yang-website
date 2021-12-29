import React, { Component } from 'react'

export default class Developer extends Component {
    render(){
        return (
            <div class="font-montserrat flex flex-col items-center justify-center bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800">
                    <h2 class="pb-4 font-semibold font-medium text-2xl text-gray-900 dark:text-white">developer</h2>
                    <p class="pb-4 text-center">I bring concepts to life through both individual projects and team collaboration</p>
                    <p class="text-lg font-medium text-red-400 dark:text-white tracking-wide">languages</p>
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Java</p>     
                    <p>SQL</p>
                    <p>C/C++</p>
            </div>
        );
    }
}
