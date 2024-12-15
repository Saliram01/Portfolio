import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState , useEffect} from 'react'

export function Meme(){
    const [memeData , setMeme] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then((res) => res.json())
        .then((memesData) => {
            setMeme(memesData.data.memes)
        });
    },[])

    return(
            <div className="px-12">
                <h1 className='text-center pt-4 pb-8 font-semibold text-2xl '>Meme Generator</h1>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {memeData.map((data,i) => {
                        return(
                            <NavLink className="flex justify-center items-center flex-col border-2 p-4 rounded-md" key={i}>
                                <img src={data.url} className='w-52 h-52 object-cover mb-4' />
                                <p>{data.name}</p>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
    )
}