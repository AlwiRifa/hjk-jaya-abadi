'use client'

import { MdChevronRight, MdLocationPin } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'
import Container from './Container'
import { IconType } from 'react-icons'

interface ContactProps {
  title?: string,
  text?: string,
  icon: IconType
}

export const ContactCard = ({ title, text, icon: Icon }: ContactProps) => {
  return (
    <div className='flex gap-2 items-center text-zinc-500 hover:text-white cursor-pointer transition'>
      <Icon size={16} />
      <p className='text-sm font-medium'>{text}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full bg-zinc-800 pt-16 pb-40">
      <Container>
        <div className='flex gap-56'>
          <div className="flex flex-col text-start gap-2">
            <img className='h-12' src='/images/logo.png' alt='logo' />
            <div className='flex flex-col gap-2  translate-x-2'>
              <ContactCard text='Purwakarta, Indonesia' icon={MdLocationPin} />
              <ContactCard text='+62 812-8252-6995' icon={BsWhatsapp} />
              <ContactCard text='hannahjk@gmail.com' icon={FiMail} />
            </div>
          </div>

          <div className="flex gap-24 translate-y-4">
            <div className='flex flex-col gap-2'>
              <h4 className='text-lg font-semibold tracking-[2px] text-white'>INFORMASI</h4>
              <ContactCard text='Tentang kami' icon={MdChevronRight} />
              <ContactCard text='Portfolio' icon={MdChevronRight} />
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-lg font-semibold tracking-[2px] text-white'>LAYANAN KAMI</h4>
              <ContactCard text='Kontruksi' icon={MdChevronRight} />
              <ContactCard text='Pengadaan' icon={MdChevronRight} />
              <ContactCard text='Instalasi' icon={MdChevronRight} />
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-lg font-semibold tracking-[2px] text-white'>SUPPORT</h4>
              <ContactCard text='Blog' icon={MdChevronRight} />
              <ContactCard text='FAQ' icon={MdChevronRight} />
              <ContactCard text='Kebijakan privasi' icon={MdChevronRight} />
            </div>
          </div>

        </div>
      </Container>
        <div className='absolute bottom-0 p-6 flex justify-center bg-zinc-950 w-full text-white'>
          <p className="text-sm font-light">
            Copyright 2023 ©PT HJK Jaya Abadi.
          </p>
        </div>
    </div>

  )
}

export default Footer