import React from 'react'
import Filters from '../components/Filters'
import ZeallyNavbar from '../components/Navbar'

function Explore() {
  return (
    <div className='home explore'>
        <ZeallyNavbar />
       <Filters />
    </div>
  )
}

export default Explore