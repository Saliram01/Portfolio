import React, { useState } from 'react'

function SignUpForm() {
    const [name ,setName] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    function CallMe(event){
        console.log(name);
        console.log(email);
        console.log(password);
        event.preventDefault();
    }

  return (
    <div className='w-full'>
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <form action="#" onSubmit={CallMe} className='w-[320px] shadow-md px-4 py-6 border-2 border-white hover:border-blue-100 rounded-md'>
                <h1 className='text-center pb-6 font-semibold font-mono text-2xl'>sign up</h1>
                <div className="pb-3">
                    <input type="text" onChange={(e) => setName(e.target.value)} className='py-2 border w-full rounded px-1 focus:ring-1 focus:outline-none' placeholder='Name' value={name} required/>
                </div>
                <div className="pb-3">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className='py-2 border w-full rounded px-1 focus:ring-1 focus:outline-none' placeholder='Email id' value={email} required/>
                </div>
                <div className="pb-3">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className='py-2 border w-full rounded px-1 focus:ring-1 focus:outline-none' placeholder='Password' value={password} required/>
                </div>
                <div className="flex justify-between py-4">
                    <button className='py-1 w-32 border-2 rounded-md focus:ring-2 focus:ring-blue-200'>Sign Up</button>
                    <button disabled className='py-1 w-32 border-2 rounded-md focus:ring-2 focus:ring-blue-200'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpForm