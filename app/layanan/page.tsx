import React from 'react'
import Footer from '../components/Footer'
import LayanaKami from '../components/LayanaKami'

type Props = {}

const Layanan = (props: Props) => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero2.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <LayanaKami />
      <Footer />
    </div>
  )
}

export default Layanan