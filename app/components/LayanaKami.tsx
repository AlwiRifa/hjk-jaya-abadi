import React from 'react'
import Container from './Container'
import Image from 'next/image'

interface CardProps {
  title?: string,
  text?: string,
}

export const Card = ({ title, text }: CardProps) => {
  return (
    <div className='flex flex-col justify-start gap-4 p-6 border-[1px] rounded-lg'>
      <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
      <p className='text-sm leading-7 text-zinc-600'>{text}</p>
      <div className='mt-auto'>
        <div className='px-4 py-2 rounded-md font-medium text-sm text-white bg-blue-500 hover:bg-blue-400 cursor-pointer inline-block'>
          Cek detail
        </div>
      </div>
    </div>
  )
}



const dataCard = [
  {
    title: 'Konstruksi',
    text: 'Memadukan keahlian insinyur struktural dan pengetahuan industri untuk menghasilkan fasilitas produksi yang efisien dan tahan lama, mendukung pertumbuhan bisnis Anda.'
  },
  {
    title: 'Instalasi Listrik',
    text: 'Layanan instalasi listrik berkualitas tinggi untuk memastikan sistem listrik Anda berfungsi dengan baik dan aman.'
  },
  {
    title: 'Instalasi Plumbing',
    text: 'Kami menawarkan instalasi plumbing profesional untuk memenuhi kebutuhan air bersih dan pembuangan limbah di berbagai proyek.'
  },
  {
    title: 'Pengadaan Material',
    text: 'Menghadirkan sumber daya dan bahan berkualitas tinggi untuk proyek Anda dengan harga yang kompetitif.'
  },
  {
    title: 'Pengadaan Peralatan',
    text: 'Menyediakan peralatan berkualitas tinggi untuk proyek konstruksi dan industri Anda.'
  },
  {
    title: 'Perawatan dan Pemeliharaan',
    text: 'Layanan perawatan dan pemeliharaan untuk menjaga sistem dan fasilitas Anda dalam kondisi optimal.'
  }
];


const LayanaKami = () => {
  return (
    <Container>
      <div className='py-12'>
        <div className='p-6 flex flex-col items-center justify-center text-center gap-4'>
          <h1 className='text-2xl sm:text-4xl font-semibold tracking-tight'>Layanan kami</h1>
          <p className='text-sm sm:text-base max-w-4xl text-zinc-400'>PT HJK JAYA ABADI adalah konsultan perencana struktur dan partner terbaik untuk segala bidang proyek konstruksi, pengadaan, dan instalasi berkualitas tinggi.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
          {dataCard.map((data) => (
            <Card
              key={data.title}
              title={data.title}
              text={data.text}
            />
          ))}

        </div>
      </div>
    </Container>
  )
}

export default LayanaKami