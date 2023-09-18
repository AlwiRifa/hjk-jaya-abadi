import React from 'react'
import Container from './Container'
import Image from 'next/image'

import { RiDoubleQuotesL } from 'react-icons/ri'

interface CardProps {
  title?: string,
  text?: string,
  footer: React.ReactNode
}

export const Card = ({ title, text, footer }: CardProps) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 p-6 border-[1px] rounded-lg bg-white hover:text-white hover:bg-blue-400 transition'>
        <RiDoubleQuotesL size={48} />
        <p className='text-sm text-center font-medium leading-loose'>{text}</p>
        {footer}
      </div>
    </div>
  )
}

const footerContent = (
  <div className='flex flex-col justify-center items-center gap-4 p-6'>
    <Image alt='person' src='/images/alwi.png' height='50' width='50' className='rounded-full' />
    <div className='text-center'>
      <p className='font-semibold'>Alwi</p>
      <p className='text-sm'>Developer</p>
    </div>
  </div>
)

const Testimoni = () => {
  return (
    <div className='py-12 bg-zinc-100'>
      <Container>
        <div className='p-6 flex flex-col items-center justify-center text-center gap-4'>
          <h1 className='text-4xl font-semibold tracking-tight'>Testimoni</h1>
          <p className='max-w-4xl text-zinc-400'>
            Testimoni langsung dari klien kami yang telah menggunakan jasa dari layanan Rumah Struktur Engineering. Temukan bagaimana kami membantu mereka dalam merancang dan menghitung struktur bangunan yang aman, kuat, dan efisien
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
          <Card
            title='Kontruksi'
            text='HJK jaya abadi partner yang sangat berharga dalam proyek pembangunan kami. Mereka tidak hanya memberikan perhitungan struktur yang akurat, tetapi juga memberikan saran dan solusi yang sangat membantu'
            footer={footerContent}
          />
          <Card
            title='Kontruksi'
            text='HJK jaya abadi partner yang sangat berharga dalam proyek pembangunan kami. Mereka tidak hanya memberikan perhitungan struktur yang akurat, tetapi juga memberikan saran dan solusi yang sangat membantu'
            footer={footerContent}
          />
          <Card
            title='Kontruksi'
            text='HJK jaya abadi partner yang sangat berharga dalam proyek pembangunan kami. Mereka tidak hanya memberikan perhitungan struktur yang akurat, tetapi juga memberikan saran dan solusi yang sangat membantu'
            footer={footerContent}
          />

        </div>
      </Container>
    </div>
  )
}

export default Testimoni