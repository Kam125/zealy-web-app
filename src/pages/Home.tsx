import React from 'react'
import Header from '../components/Header'
import News from '../components/News'
import Filters from '../components/Filters'
import NewCommunities from '../components/NewCommunities'
import FeaturedCommunities from '../components/FeaturedCommunities'
import CommunityCategories from '../components/CommunityCategories'
import TrendyCommunities from '../components/TrendyCommunities'
import UpcomingCommunities from '../components/UpcomingCommunities'
import ShapeFuture from '../components/ShapeFuture'
import Footer from '../components/Footer'



function Home() {
  return (
    <div className='home'>
       <Header />
       <News />
       <Filters />
       <NewCommunities />
       <FeaturedCommunities />
       <CommunityCategories />
       <TrendyCommunities />
       <UpcomingCommunities />
       <ShapeFuture />
       <Footer />
    </div>
  )
}

export default Home