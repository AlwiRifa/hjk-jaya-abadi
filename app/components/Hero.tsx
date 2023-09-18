'use client'

import Carousel from "./Carousel"

type Props = {}

const heroImage = [
  {

  }
]

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-full relative flex justify-center items-center">
      <Carousel />
      <div className="absolute top-2/4 bottom-2/4  flex flex-col gap-6 justify-center items-center ">
        <h1 className="text-2xl sm:text-5xl font-semibold tracking-tight text-white  text-center ">
          Jasa Kontruksi Terpercaya Dan Profesional
        </h1>
        <p className="text-sm sm:text-2xl text-center font-semibold text-zinc-300">
          We provide quality construction for every project!
        </p>
        <a
          href="https://wa.me/+6281288039552"
          target="_blank"
          className="px-4 py-2 rounded-md text-xs font-medium text-white bg-blue-500 hover:bg-blue-400 hover:translate-y-1 hover:shadow-lg transition-all cursor-pointer">
          Hubungi Kami Sekarang!
        </a>
      </div>
    </div>
  )
}

export default Hero