import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mood, setMood] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    setEmail("");
    setPassword("");
    evt.preventDefault();
  };

  return (
    // Navbar
    <div className="max-w-full shadow sticky top-0 z-10 bg-white">
      <div className="max-w-[1325px] mx-auto h-16 px-4 flex justify-between  items-center text-[#443169]">

        <NavLink to={"/"}><h1 className="font-bold text-xl md:w-[10%]">Portfolio</h1></NavLink>

        <nav className="hidden md:grid grid-flow-col place-content-center content-center gap-12 cursor-pointer font-bold md:w-[70%]">
          <NavLink className={({ isActive }) => `${isActive ? "text-green-500" : ""}`} to={"/"}>Home</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "text-green-500" : ""}`} to={"/about"}>About</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "text-green-500" : ""}`} to={"/project"}> Project</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "text-green-500" : ""}`} to={"/blog"}>Blog +</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "text-green-500" : ""}`} to={"/contact"}>Contact</NavLink>
        </nav>
        {/* mood */}

        <div className="flex justify-center sm:justify-end md:justify-center items-center rounded-full cursor-pointer w-[75%] md:w-8 pt-2">
          <span onClick={() => setMood(!mood)}> {mood ? (<i className="fa-regular fa-sun text-md"></i>)
           : (<i className="fa-solid fa-moon text-md"></i>)}
          </span>
        </div>

        <button onClick={() => setSignIn(!signIn)}
          className="h-[36px] border-2  hover:border-purple-900 px-6 font-bold rounded-full delay-75 transition-all hidden md:block"
        >Sign in
        </button>

        <p className="md:hidden text-3xl " onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <span>&times;</span> : <span>&#8801;</span>}
        </p>
      </div>

      {/* Login button popup  */}

      <div
        onClick={() => setSignIn(false)} className={`fixed w-full top-0 h-screen z-50 bg-[rgba(0,0,0,0.2)] backdrop-blur-xl ${
          signIn ? "scale-100" : "scale-0"}`}></div>
      <div
        className={`fixed w-[350px] z-50 shadow-white h-[400px] inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md hidden sm:block ${signIn ? "scale-100" : "scale-0"} border-2`}>

        <form action="#" className="px-10" onSubmit={handleSubmit}>
          <h1 className="py-2 font-semibold text-neutral-500 text-2xl text-center border-b-2">Sign in</h1>
          <div className="my-8">

            <div className="mb-2">
              <label htmlFor="" className="block mb-1">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                className="border-2 w-full h-9 rounded-full px-2 outline-slate-400" required />
            </div>

            <div>
              <label htmlFor="" className="block mb-1">Password</label>
              <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password}
                className="border-2 w-full h-9 rounded-full px-2 outline-slate-400" required />
            </div>

            <div className="my-3 px-2 flex justify-start items-center gap-2">
              <input onClick={() => setShowPassword(!showPassword)} type="checkbox" className="w-4 h-4" />
              <label htmlFor="">Show Password</label>
            </div>

            <div className="my-4">
              <button className="py-2 w-full  rounded-full border-2 bg-green-500 text-white active:bg-green-400">Sign In</button>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs font-semibold">By continuing, you agree to Portfolio Conditions of Use and Privacy Notice.</p>
            </div>

          </div>

          <p onClick={() => setSignIn(false)}
            className="fixed text-3xl text-[#919191] -top-2 right-1 font-semibold cursor-pointer hover:text-red-600">&times;
          </p>

        </form>
      </div>

      {/* menu page */}

      <div className={`fixed w-[100%] h-screen left-[-100%] z-10 transition-all md:hidden ${showMenu ? "left-[0]" : "" }`}>
        <div
          className={`w-full px-4 h-[710px] py-4 text-md font-bold bg-white ${showMenu ? "bg-slate-100" : ""}`} >
          <ul className="space-y-4 ">
            <li className="text-gray-600"><Link to={"/"}>Home</Link></li>
            <li className="text-gray-600"><Link to={"/about"}>About</Link></li>
            <li className="text-gray-600"><Link to={"/project"}>Project</Link></li>
            <li className="text-gray-600"><Link to={"/blog"}>Blog +</Link></li>
            <li className="text-gray-600"><Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;