import React, { useState } from 'react'
import './LoginSignup.css'
import usericon from '../assets/user.png'
import passwordicon from '../assets/locked.png'
import emailicon from '../assets/email.png'

const LoginSignup = () => {
    const [action,setAction]= useState("Login")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
                <img src={usericon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className='input'>
                <img src={emailicon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className='input'>
                <img src={passwordicon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
            {action==='Sign up'?<div></div>:<div className='forgotpassword'>Lost Password? <span>click here</span></div>}          
            <div className='submit-container'>
                <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}}>Sign up</div>
                <div className={action==='Sign up'?'submit gray':'submit'}onClick={()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
        
    </div>
  )
}

export default LoginSignup