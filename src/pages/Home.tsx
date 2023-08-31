import React, { useEffect } from 'react'
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
import { useDispatch } from 'react-redux'
import { getAllCommunities } from '../redux/slices/communitySlice'

function Home() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch<any>(getAllCommunities());
  })
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