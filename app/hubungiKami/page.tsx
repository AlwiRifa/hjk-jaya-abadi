import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Heading from '../components/Heading'

type Props = {}

const HubungiKami = (props: Props) => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero2.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full text-center absolute inset-0 bg-black/70 ">

        <Heading
          title='Apa ada yang bisa kami bantu?'
          text='Jangan ragu untuk bertanya atau diskusikan kebutuhan proyek Anda dengan kami!'
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default HubungiKami