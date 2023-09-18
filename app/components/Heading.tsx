import React from 'react'

interface HeadingProps {
  title?: string;
  text?: string;
}


const Heading = ({ title, text }: HeadingProps) => {
  return (
    <div className="absolute inset-0 z-60 justify-center max-w-7xl mx-auto flex flex-col gap-6 sm:px-0 px-6">
        <h1 className="text-2xl sm:text-5xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-base sm:text-xl Leading-7 text-zinc-300">
          {text}
        </p>
        <div>
          <a
            href="https://wa.me/+6281288039552"
            target="_blank"
            className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition cursor-pointer">
            Hubungi Kami Sekarang!
          </a>
        </div>
      </div>
  
  )
}

export default Heading