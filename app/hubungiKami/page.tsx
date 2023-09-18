import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

type Props = {}

const HubungiKami = (props: Props) => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero2.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <Contact />
      <Footer />
    </div>
  )
}

export default HubungiKami