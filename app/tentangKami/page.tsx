import React from 'react'
import Footer from '../components/Footer'

type Props = {}

const TentangKami = (props: Props) => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero2.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <Footer />
    </div>
  )
}

export default TentangKami