'use client'

import { BsWhatsapp } from 'react-icons/bs'
import React from 'react'

type Props = {}

const Whatsapp = (props: Props) => {
  return (
    <div className='fixed right-0 bottom-0 p-4 sm:p-6 pb-12 text-white hover:scale-110 duration-300 transition'>
      <div className='p-3 bg-green-500 rounded-full cursor-pointer'>
        <BsWhatsapp size={32} />
      </div>
    </div>
  )
}

export default Whatsapp