import React from 'react'
import Container from './Container'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdMiscellaneousServices, MdThumbUpOffAlt } from 'react-icons/md'

import { IconType } from 'react-icons/lib/esm/iconBase'

interface ContactProps {
  title?: string,
  text?: string,
  icon: IconType
}

export const ContactCard = ({ title, text, icon: Icon }: ContactProps) => {
  return (
    <div className='flex items-center gap-6'>
      <Icon size={36} />
      <div className='flex flex-col'>
        <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
        <p className='text-sm font-medium text-zinc-400'>{text}</p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <Container>
      <div className='py-12 pb-48'>
        <div className='p-6 flex flex-col items-center justify-center text-center gap-4'>
          <h1 className='text-4xl font-semibold tracking-tight'>Hubungi Kami</h1>
          <p className='max-w-xl text-zinc-400'>Tinggalkan pertanyaan di formulir. Tim kami akan merespons Anda paling lama 24 jam.</p>
        </div>

        <div className='flex justify-center items-start pt-6 gap-16'>
          <div className='hidden sm:flex flex-col gap-8'>
            <ContactCard
              title='Konsultasi Gratis'
              text='Silakan hubungi tim kami dan diskusikan semua kebutuhan proyek Anda.'
              icon={TfiHeadphoneAlt}
            />
            <ContactCard
              title='Pelayanan Terbaik'
              text='Tim kami selalu bekerja dan berkomitmen memberikan pelayanan yang terbaik bagi pelanggan.'
              icon={MdMiscellaneousServices}
            />
            <ContactCard
              title='Hasil Memuaskan'
              text='Kami selalu berusaha memenuhi harapan Anda sehingga hasil yang didapat sesuai keinginan Anda.'
              icon={MdThumbUpOffAlt}
            />
          </div>

          <form className='grid grid-cols-1 gap-4 max-w-xl w-full'>
            <div className='grid grid-cols-2 gap-4'>
              <input type="text" className='text-sm py-2 pl-2 border-[1px] rounded-md shadow-sm outline-none focus:ring-1 focus:ring-blue-400' placeholder='Nama' />
              <input type="text" className='text-sm py-2 pl-2 border-[1px] rounded-md shadow-sm outline-none focus:ring-1 focus:ring-blue-400' placeholder='Email' />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <input type="text" className='text-sm py-2 pl-2 border-[1px] rounded-md shadow-sm outline-none focus:ring-1 focus:ring-blue-400' placeholder='Judul Pesan' />
              <input type="text" className='text-sm py-2 pl-2 border-[1px] rounded-md shadow-sm outline-none focus:ring-1 focus:ring-blue-400' placeholder='Nomor telepon' />
            </div>
            <textarea name="" id="" placeholder='Tuliskan pesan mu disini' className=' h-24 text-sm border-[1px] rounded-md p-2 outline-none shadow-sm focus:ring-1 focus:ring-blue-400 '></textarea>
            <div className='flex sm:justify-start justify-center '>
              <button className='px-4 py-2 border-[1px] rounded-md font-medium text-sm text-white shadow-sm bg-blue-500 hover:bg-blue-400'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Contact