import React from 'react'
import Project from '../components/Project'
import Footer from '../components/Footer'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero2.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <Project />
      <Footer />
    </div>
  )
}

export default Portfolio