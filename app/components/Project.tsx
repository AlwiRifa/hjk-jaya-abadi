import React from 'react'
import Container from './Container'
import Image from 'next/image'

interface CardProps {
  title?: string,
  text?: string,
  footer: React.ReactNode
}

export const Card = ({ title, text, footer }: CardProps) => {
  return (
    <div className='flex flex-col justify-start gap-4 p-6 border-[1px] rounded-lg bg-white'>

      <Image src='/images/hero1.jpg' alt='hero' width='500' height='500' />
      <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
        <p className='text-sm font-medium text-zinc-400'>{text}</p>
      </div>
      {footer}
    </div>
  )
}

const footerContent = (
  <div className='flex justify-between pt-4'>
    <div className='px-4 py-2 rounded-md font-medium text-sm text-white bg-blue-500 hover:bg-blue-400 cursor-pointer'>
      Cek detail
    </div>
  </div>
)

const Project = () => {
  return (
    <div className='py-12 bg-zinc-100'>
      <Container>
        <div className='p-6 flex flex-col items-center justify-center text-center gap-4'>
          <h1 className='text-4xl font-semibold tracking-tight'>100+ Proyek Sukses Dikerjakan</h1>
          <p className='max-w-4xl text-zinc-400'>Berikut ini adalah proyek-proyek yang telah kami selesaikan dan yang sedang kami kerjakan di HJK Jaya Abadi. Klik pada gambar untuk mempelajari lebih detail tentang proyek-proyek kami dari tahun 2018 hingga 2023.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
          <Card
            title='Kontruksi'
            text='Memadukan keahlian insinyur struktural dan pengetahuan industri untuk menghasilkan fasilitas produksi yang efisien dan tahan lama, mendukung pertumbuhan bisnis Anda.'
            footer={footerContent}
          />
          <Card
            title='Kontruksi'
            text='Memadukan keahlian insinyur struktural dan pengetahuan industri untuk menghasilkan fasilitas produksi yang efisien dan tahan lama, mendukung pertumbuhan bisnis Anda.'
            footer={footerContent}
          />
          <Card
            title='Kontruksi'
            text='Memadukan keahlian insinyur struktural dan pengetahuan industri untuk menghasilkan fasilitas produksi yang efisien dan tahan lama, mendukung pertumbuhan bisnis Anda.'
            footer={footerContent}
          />
        </div>
      </Container>
    </div>
  )
}

export default Project