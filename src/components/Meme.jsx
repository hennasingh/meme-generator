import React from 'react';
import memes from '../memesData';

export default function Meme() {

    //const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMeme] = React.useState(memes)

    function getMemeImage() {
        const memesData = memes.data.memes
        const index = Math.floor(Math.random() * memesData.length)
        const url = memesData[index].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder='Top Text' 
                    className='form-input'/>
                <input 
                    type="text" 
                    placeholder='Bottom Text' 
                    className='form-input'/>
                <button 
                    className='form-button' 
                    onClick={getMemeImage}>
                Get a new meme image 🖼
                </button>
            </div> 
            <img src={meme.randomImage} className="meme-image"/>
        </main>
    )
}