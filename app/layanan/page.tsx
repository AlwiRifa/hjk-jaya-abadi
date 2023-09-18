import React from 'react'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import Container from '../components/Container'
import LayanaKami from '../components/LayanaKami'

type Props = {}

const Layanan = (props: Props) => {
  return (
    <div className='h-screen w-full'>

      <img src="/images/hero1.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <Container>
        <Heading
          title='Layanan Kami'
          text='ami menyediakan berbagai solusi jasa yang dirancang khusus untuk memenuhi kebutuhan proyek Anda. Tim kami yang terdiri dari insinyur struktur berpengalaman dan profesional siap membantu Anda dalam mengatasi berbagai tantangan struktural, menggunakan teknologi terkini dan pendekatan inovatif.'
        />
        <LayanaKami />
      </Container>
      <Footer />
    </div>
  )
}

export default Layanan