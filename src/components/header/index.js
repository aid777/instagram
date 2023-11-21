"use client"

import {useState} from 'react'

export default function Header(){
    return(
        <header className='header'>
            <div className='container'>
                <div>
                    <img/>
                    <input placeholder='Search'></input>
                </div>
            </div>
            <div>
                <button>
                    <img/>
                </button>
                <button>
                    <img/>  
                </button>
                <button>
                    <img/>
                </button>
                <button>
                    <img/>
                </button>
                <button>
                    <img/>
                </button>
                <button>
                    <img/>
                </button>
            </div>
        </header>
    )
}