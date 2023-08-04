import React from 'react'
import Header from '../components/Header'
import News from '../components/News'
import Filters from '../components/Filters'



function Home() {
  return (
    <div className='home'>
       <Header />
       <News />
       <Filters />
    </div>
  )
}

export default Home