import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <form action="" className='formLogin'>
            <h1 className='H1Login'>Login</h1>
            <input type="text" className='inputLogin' placeholder='Digite Seu Nome'/>
            <button className='loginButton'>Login...</button>
        </form>
    </div>
  )
}
