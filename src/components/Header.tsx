import React from 'react'
import Navbar from './Navbar'
import { Input } from 'reactstrap'


function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-content'>
                <h1>YOUR ADVENTURE STARTS HERE</h1>
                <h6>Join exciting communities, have fun and make a difference.</h6>
                <Input placeholder='Search for communities'>
                </Input>
            </div>

        </div>
    )
}

export default Header