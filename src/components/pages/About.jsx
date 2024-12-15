import React, { useContext } from 'react'
import AboutSkill from './AboutSkill';

function About() {
  return (
    <div className='flex justify-center items-center h-[90vh]'>
        <div className="w-[85%] rounded-lg flex justify-center items-center">
            <div className="w-[50%] px-12">
                <div className="px-8">
                  <h1 className='text-2xl font-bold text-gray-400 mb-6'>ABOUT ME</h1>
                  <p>I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>
                  <ul className='flex gap-4 flex-wrap mt-8'>
                    <AboutSkill title="#JavaScript"/>
                    <AboutSkill title="#React"/>
                    <AboutSkill title="#Html"/>
                    <AboutSkill title="#CSS"/>
                    <AboutSkill title="#Java"/>
                    <AboutSkill title="#SASS"/>
                    <AboutSkill title="#Bootstrap"/>
                    <AboutSkill title="#Tailwind"/>
                    <AboutSkill title="#Figma"/>
                    <AboutSkill title="#Github"/>
                    <AboutSkill title="#Netlify"/>
                  </ul>
                </div>
                <div className="my-12 px-8">
                  <h1 className='text-2xl font-bold text-gray-400'>Java Full Stack Development</h1>
                  <ul className='flex py-8 gap-6'>
                    <li><img className='w-12 cursor-pointer' src="https://img.icons8.com/color/512/html-5--v2.png"/></li>
                    <li><img className='w-12 cursor-pointer' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/></li>
                    <li><img className='w-12 cursor-pointer' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png"/></li>
                    <li><img className='w-12 cursor-pointer' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/></li>
                    <li><img className='w-12 cursor-pointer' src="https://i.pinimg.com/originals/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.png"/></li>
                    <li><img className='w-10 pt-1 cursor-pointer' src="https://tono-n-chi.com/blog/wp-content/uploads/2015/07/Spring.png" /></li>
                  </ul>
                </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
              <img src="https://anuragsinghbam.netlify.app/images/coder.svg" alt='coding'/>
            </div>
        </div>
    </div>
  )
}

export default About