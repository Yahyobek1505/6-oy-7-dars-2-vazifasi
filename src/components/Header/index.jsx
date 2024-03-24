import React from 'react'
import './index.css'
function Header() {
  return (
    <>
    <header className='d-flex'>
        <div className="logo">
          <h1>Telefonchi.uz</h1>
        </div>
        <ul className='d-flex menu'>
          <li><a href="">Home</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">About</a></li>
        </ul>
        <div className="link d-flex">
          <button className='btn btn-info'>Sign up</button>
          <button className='btn btn-success'>Login</button>
        </div>
      </header>
    </>
  )
}

export default Header
