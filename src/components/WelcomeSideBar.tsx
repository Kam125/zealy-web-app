import React from 'react'
import logo from '../assets/images/logoWelcome.png'

function WelcomeSideBar() {
  return (
    <div className='welcome-sidebar'>
        <img src={logo} alt=''/>
        <i className="fas fa-search"></i>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-solid fa-globe"></i>
    </div>
  )
}

export default WelcomeSideBar