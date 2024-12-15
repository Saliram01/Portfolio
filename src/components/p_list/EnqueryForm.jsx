import React, { useState } from 'react'

function EnqueryForm() {
  const [userData ,setUserData] = useState({
    uname : '',
    uemail : '',
    uphone : '',
    umessage : '',
    id : '',
  })

  const getValue = (evt) => {
    const oldData = {...userData}
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    oldData[inputName] = inputValue;
    setUserData(oldData);
  }

  const handleSubmit = (event) => {
    const currentData = {
      uname : userData.uname,
      uemail : userData.uemail,
      uphone : userData.uphone,
      umessage : userData.umessage,
    }
    event.preventDefault();
  }

  return (
    <div>
        <div className="w-full h-screen md:flex md:flex-col justify-center items-center">
        <h2 className='text-center font-bold pb-2 my-8 md:my-0 text-2xl underline'>Enquery Now</h2> 
          <form onSubmit={handleSubmit} className='max-w-xs border-2 border-white hover:border-gray-200 sm:max-w-sm space-y-2 w-[80%] mx-auto sm:py-10 sm:px-4 sm:shadow-xl rounded-md'> 
              <div className="">
                  <label htmlFor="name">Name</label>
                  <input onChange={getValue} className='border py-2 w-full px-2 rounded outline-cyan-600 outline-4' type="text" id='name' name='uname' value={userData.uname}/>
              </div>
              <div className="">
                  <label htmlFor="email">Email</label>
                  <input onChange={getValue} className='border py-2 w-full px-2 rounded outline-cyan-600 outline-4' type="email" id='email' name='uemail' value={userData.uemail}/>
              </div>
              <div className="">
                  <label htmlFor="phone">Phone</label>
                  <input onChange={getValue} className='w-full border-2 py-2 px-2 rounded outline-cyan-600 outline-4' type="text" id='phone' name='uphone' value={userData.uphone}/>
              </div>
              <div className="">
                  <label htmlFor="message">Message</label>
                  <textarea onChange={getValue} className='w-full border-2 py-2 px-2 rounded outline-cyan-600 outline-4' name="umessage" id="message" value={userData.umessage}></textarea>
              </div>
              <button className='py-2 w-full border-2 rounded-md active:bg-green-500 hover:border-2 hover:text-blue-800  bg-green-400 text-white'>{userData.index !== '' ? 'Update' : 'Save'}
              </button>
          </form>
        </div>
    </div>
  )
}

export default EnqueryForm