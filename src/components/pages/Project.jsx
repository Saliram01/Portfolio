import React from 'react'
import { Link } from 'react-router-dom'
import Hooks from '../hooks/Hooks'
import ProjectList from '../p_list/ProjectList'

function Project() {
  return (
    <section className='w-full py-14'>
        <div className='flex justify-center items-center flex-col gap-8'>

        <h2 className='font-bold text-2xl text-slate-400 underline'>React Hooks</h2>
        <div className='flex justify-center items-center gap-6 flex-wrap py-4 max-w-[800px]'>
            <Link to={'/useState'}><Hooks value='useState'/></Link>
            <Link to={'/useEffect'}><Hooks value='useEffect'/></Link>
            <Link to={'/useContext'}><Hooks value='useContext'/></Link>
            <Link to={'/useRef'}><Hooks value='useRef'/></Link>
            <Link to={'/useMemo'}><Hooks value='useMemo'/></Link>
            <Link to={'/useCallback'}><Hooks value='useCallback'/></Link>
            <Link to={'/useReducer'}><Hooks value='useReducer'/></Link>
            <Link to={'/useLayoutEffect'}><Hooks value='useLayoutEffect'/></Link>
            {/* <Link to={'/customHook'}><Hooks value='customHooks'/></Link> */}
        </div>

        </div>
        <div className="max-w-screen mx-auto">
            <h1 className='w-full font-serif text-center py-8 text-3xl font-semibold text-green-700 underline px-4'>My Project Lists</h1>
            <div className="max-w-[800px] mx-auto flex justify-center items-center flex-wrap gap-5 py-8 px-4">
            <Link to={'/bgchanger'}><ProjectList value='BgChanger'/></Link>
            <Link to={'/enquery'}><ProjectList value='EnqueryForm'/></Link>
            <Link to={'/sign-up'}><ProjectList value='SignUpForm'/></Link>
            <Link to={'/meme'}><ProjectList value='Meme Generator'/></Link>
            <Link to={'/image'}><ProjectList value='Image Gallery'/></Link>
            <Link to={'/todoList'}><ProjectList value='Todo Container'/></Link>
            </div>

        </div>
    </section>
  )
}
export default Project