import React from 'react'
import logo from '../imgs/troll-face.png'

export default function Header() {

    return (
        <header className="header">
            <img className="logo" src={logo} />
            <h3 className='title'>Meme Generator</h3>
            <h4 className='header-desc'>React Course - Project 3</h4>
        </header>
        
    )

}