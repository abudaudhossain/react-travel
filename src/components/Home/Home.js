import React from 'react'
import SubBanner from '../shared/SubBanner/SubBanner'
import Team from '../shared/team/Team'
import Banner from './Banner/Banner'
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
    </>
  )
}

export default Home