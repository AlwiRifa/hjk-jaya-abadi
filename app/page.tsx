import Image from 'next/image'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LayanaKami from './components/LayanaKami'
import Contact from './components/Contact'
import Testimoni from './components/Testimoni'
import Client from './components/Client'
import Project from './components/Project'
import Whatsapp from './components/Whatsapp'

export default function Home() {
  return (
    <div className='relative overflow-hidden'>
      <Hero />
      <LayanaKami />
      <Project />
      <Client />
      <Testimoni />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  )
}
