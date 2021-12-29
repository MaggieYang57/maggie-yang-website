import React, { Component } from 'react'

export default class Contact extends Component {
    render(){
        return (
            <div class='pb-48'>
                <div class="flex flex-col items-center justify-center" id ="contact">
                    <h1 className="text-red-400 text-4xl font-montserrat font-semibold tracking-wide">let's connect !</h1>
                    <div class ='container flex items-center justify-center pt-24 space-x-24'>
                        <a href="https://www.linkedin.com/in/yang-maggie/">
                            <img src="https://img.icons8.com/ios/50/000000/linkedin-2--v1.png" alt='linkedin'/>
                        </a>
                        <a href = "mailto: 19yangmaggie@gmail.com">
                            <img src="https://img.icons8.com/ios/50/000000/email-open.png" alt='email'/>
                        </a>
                        <a href = "https://github.com/MaggieYang57">
                            <img src="https://img.icons8.com/ios/50/000000/github-2.png" alt='github'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


