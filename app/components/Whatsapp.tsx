'use client'

import { BsWhatsapp } from 'react-icons/bs'
import React from 'react'
import Link from 'next/link'

type Props = {}

const Whatsapp = (props: Props) => {
  return (
    <div className='fixed right-0 bottom-0 p-4 sm:p-6 pb-12 text-white hover:scale-110 duration-300 transition'>
      <div className='p-3 text-white bg-green-500 shadow-md rounded-full cursor-pointer'>
        <Link
          href="https://wa.me/+6281288039552"
          target="_blank"
        >
          <BsWhatsapp size={32} />
        </Link>
      </div>
    </div >
  )
}

export default Whatsapp