import React from 'react'
import {Link} from 'react-router-dom'

function Resume({showResume, setShowResume}) {

    function resume(e) {
        e.stopPropagation();
    }

  return (
    <div onClick={() => setShowResume(true)} className={`${showResume ? 'hidden' : 'block'} h-screen w-full fixed z-50 top-0 left-0 flex justify-center items-center bg-[rgba(100,98,98,0.8)] backdrop-blur-sm`}>

        <div onClick={resume} className="w-full  md:w-[600px] md:h-[700px] shadow-md border rounded-md bg-[rgba(100,98,98)] text-white">

            <div className="text-center pt-16 sm:pt-8 pb-4 border-b mx-4 sm:mx-8">
                <h1 className='text-3xl sm:text-4xl font-semibold text-gray-300 mb-2'>Saliram Chaudhary</h1>
                <Link className='text-gray-300 underline' to={'https://www.linkedin.com/in/saliram-chaudhary-a0578127b'}>https://www.linkedin.com/in/saliram-chaudhary-a0578127b</Link>
                <h3 className='text-sm'>saliramc66@gmail.com</h3>
                <h3 className='text-sm'>+91 6362570266</h3>
            </div>
            <div className="mx-8 py-6">
                <h1 className='text-2xl font-semibold underline mb-2 text-pink-200'>Technical Skills</h1>
                <ul className='mb-8 mx-6'>
                    <li className='list-disc'> <span className='font-semibold text-sm text-purple-300'>Language</span>: Html , CSS , JavaScript</li>
                    <li className='list-disc'> <span className='font-semibold text-sm text-purple-300'>Web Development</span>: Html, CSS, SASS , DOM Manupulation, Ajax, Async Js, API’s, Git and Version Control.</li>
                    <li className='list-disc'> <span className='font-semibold text-sm text-purple-300'>WebDev Tools</span>: VSCode, Chrome DevTools ,Github, Figma, Netlify </li>
                </ul>
                <h1 className='text-2xl font-semibold underline mb-2 text-pink-200'>Personal Project</h1>
                <ul className='mb-8 mx-6'>
                    <li className='list-disc'>Portfolio</li>
                    <li className='list-disc'>TodoList</li>
                    <li className='list-disc'>Weather App</li>
                    <li className='list-disc'>Country Rest Api</li>
                </ul>
                <h1 className='text-2xl font-semibold underline mb-2 text-pink-200'>Education</h1>
                <ul className='mx-6'>
                    <li className='list-disc'>+2 Pass</li>
                    <li className='list-disc'>Self Taught, Youtube, Apponix Technologies.</li>                    
                    <li className='list-disc'>Full Stack Java Development (Apponix Technologies Banglore).</li>
                </ul>
                
            </div>

        </div>
    </div>
  )
}

export default Resume
