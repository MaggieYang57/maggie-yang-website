import React, { Component } from 'react'

export default class Interests extends Component {
    render(){
        return (
            <div class="font-montserrat flex flex-col items-center justify-center bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800">
                    <h2 class="pb-4 font-semibold font-medium text-2xl text-gray-900 dark:text-white">learner</h2>
                    <p class="pb-4 text-center">I am passionate towards trying new things and cultivating diversity and inclusion towards my surroundings</p>
                    <p class="text-lg font-medium text-red-400 dark:text-white tracking-wide">involvements</p>
                    <p>Hack4Impact</p>
                    <p>WISH</p>
                    <p>Alpha Omega Epsilon</p>
                    <p class="text-lg font-medium text-red-400 dark:text-white tracking-wide">interests</p>
                    <p>Band</p>         
                    <p>Video Games</p>     
                    <p>Jigsaw Puzzles</p>     

            </div>
        );
    }
}
