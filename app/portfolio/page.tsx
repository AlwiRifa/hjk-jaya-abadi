import React from 'react'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Heading from '../components/Heading'

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero3.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <Container>
        <Heading 
        title='Portfolio'
        text='PT HJK JAYA ABADI memberikan kebutuhan yang disesuaikan untuk kebutuhan klien. Cari tahu bagaimana proyek Anda dapat kami selesaikan dengan hasil yang terbaik. Jelajahi portofolio proyek kami dan hubungi kami sekarang juga!'
        />
      </Container>
      <Project />
      <Footer />
    </div>
  )
}

export default Portfolio