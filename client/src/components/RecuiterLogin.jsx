import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RecuiterLogin = () => {
    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(false)
    const [isTextDataSubmitted,setIsTextDataSubmitted] = useState(false)
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form className='relatiive bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recuiter {state}</h1>
        {state === 'Login' ? <p className='text-sm mt-2'>Welcome back! Please sign in to constinue</p> : <p className='text-sm mt-2 text-center'>To continue Please Sign Up</p>}
        <>
        {state !== 'Login' && (
            <div className='border  border-blue-600 px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.person_icon} alt="" />
            <input 
            className='outline-none text-sm'
            type="text" 
            placeholder='Company Name' 
            onChange={e => setName(e.target.value)}
            value={name}
            required/>
        </div>
        )}
        
        <div className='border border-blue-600 px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.email_icon} alt="" />
            <input
            className='outline-none text-sm' 
            type="email" 
            placeholder='Email' 
            onChange={e => setEmail(e.target.value)}
            value={email}
            required/>
        </div>
        <div className='border border-blue-600 px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.lock_icon} alt="" />
            <input 
            className='outline-none text-sm'
            type="password" 
            placeholder='Password' 
            onChange={e => setPassword(e.target.value)}
            value={password}
            required/>
        </div>
        {state === 'Login' && <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forget Password?</p>}
        </>
        <button className='bg-blue-600 w-full text-white py-2 rounded-full mt-2 cursor-pointer'>{state === 'Login' ? 'Login' : "Create Account"}</button>
        {state === 'Login' ?<p className='text-center mt-1'>Don't have an account? <span  className='text-blue-600 cursor-pointer' onClick={ e => setState('Sign Up')}>Sign Up</span></p>:
        <p className='text-center mt-1'>Already have an account? <span onClick={ e => setState('Login')} className='text-blue-600 cursor-pointer' >Login</span></p>}
      </form>
    </div>
  )
}

export default RecuiterLogin