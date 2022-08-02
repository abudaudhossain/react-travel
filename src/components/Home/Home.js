import React from 'react'
import SubBanner from '../shared/SubBanner/SubBanner'
import Team from '../shared/team/Team'
import Banner from './Banner/Banner'
import Destinations from './Destinations'
import Features from './Features'
import Services from './service/Services'

const Home = () => {
  return (
    <>
      <Banner />
      <SubBanner />
      <Features />
      <Services />
      <Team />
      <Destinations />
    </>
  )
}

export default Home