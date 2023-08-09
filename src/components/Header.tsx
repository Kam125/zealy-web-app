import React from 'react'
import Navbar from './Navbar'
import { Input, InputGroup, InputGroupText } from 'reactstrap'


function Header() {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-content'>
                <h1>YOUR ADVENTURE STARTS HERE</h1>
                <h6>Join exciting communities, have fun and make a difference.</h6>
                <InputGroup>
                    <InputGroupText>
                        <i className="fas fa-search"></i>
                    </InputGroupText>
                    <Input placeholder="Search for communities" />
                </InputGroup>
            </div>

        </div>
    )
}

export default Header