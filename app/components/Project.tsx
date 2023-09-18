'use client'

import React, { useState } from 'react'
import Container from './Container'

interface CardProps {
  title?: string,
  text?: string,
}

export const Card = ({ title, text }: CardProps) => {
  return (
    <div className='flex flex-col justify-start gap-4 p-6 border-[1px] rounded-lg bg-white'>
      <img src='/images/hero1.jpg' alt='hero'/>
      <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
        <p className='text-sm font-medium text-zinc-400'>{text}</p>
      </div>
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
    img: '/images/hero2.jpg',
    title: 'Proyek X',
    text: 'Proyek X adalah salah satu proyek besar yang telah kami selesaikan di HJK Jaya Abadi. Proyek ini melibatkan desain dan konstruksi fasilitas industri yang canggih untuk klien kami. Kami bangga dapat menyelesaikan proyek ini dengan sukses dan memberikan solusi yang efisien untuk klien kami.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek Y',
    text: 'Proyek Y adalah proyek infrastruktur yang sedang kami kerjakan di HJK Jaya Abadi. Proyek ini mencakup pembangunan jalan raya yang penting untuk wilayah ini. Kami berkomitmen untuk menyelesaikan proyek ini dengan kualitas terbaik dan tepat waktu.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek Z',
    text: 'Proyek Z adalah salah satu proyek renovasi bangunan yang telah kami selesaikan di HJK Jaya Abadi. Kami telah mengubah bangunan tua menjadi bangunan yang modern dan fungsional sesuai dengan kebutuhan klien kami.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek X',
    text: 'Proyek X adalah salah satu proyek besar yang telah kami selesaikan di HJK Jaya Abadi. Proyek ini melibatkan desain dan konstruksi fasilitas industri yang canggih untuk klien kami. Kami bangga dapat menyelesaikan proyek ini dengan sukses dan memberikan solusi yang efisien untuk klien kami.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek Y',
    text: 'Proyek Y adalah proyek infrastruktur yang sedang kami kerjakan di HJK Jaya Abadi. Proyek ini mencakup pembangunan jalan raya yang penting untuk wilayah ini. Kami berkomitmen untuk menyelesaikan proyek ini dengan kualitas terbaik dan tepat waktu.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek Z',
    text: 'Proyek Z adalah salah satu proyek renovasi bangunan yang telah kami selesaikan di HJK Jaya Abadi. Kami telah mengubah bangunan tua menjadi bangunan yang modern dan fungsional sesuai dengan kebutuhan klien kami.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek X',
    text: 'Proyek X adalah salah satu proyek besar yang telah kami selesaikan di HJK Jaya Abadi. Proyek ini melibatkan desain dan konstruksi fasilitas industri yang canggih untuk klien kami. Kami bangga dapat menyelesaikan proyek ini dengan sukses dan memberikan solusi yang efisien untuk klien kami.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek Y',
    text: 'Proyek Y adalah proyek infrastruktur yang sedang kami kerjakan di HJK Jaya Abadi. Proyek ini mencakup pembangunan jalan raya yang penting untuk wilayah ini. Kami berkomitmen untuk menyelesaikan proyek ini dengan kualitas terbaik dan tepat waktu.'
  },
  {
    img: '/images/hero2.jpg',
    title: 'Proyek Z',
    text: 'Proyek Z adalah salah satu proyek renovasi bangunan yang telah kami selesaikan di HJK Jaya Abadi. Kami telah mengubah bangunan tua menjadi bangunan yang modern dan fungsional sesuai dengan kebutuhan klien kami.'
  }
  // Anda dapat menambahkan lebih banyak data proyek sesuai dengan kebutuhan Anda
];


const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='py-12 bg-zinc-100'>
      <Container>
        <div className='p-6 flex flex-col items-center justify-center text-center gap-4'>
          <h1 className='text-2xl sm:text-4xl font-semibold tracking-tight'>100+ Proyek Sukses Dikerjakan</h1>
          <p className='text-sm sm:text-base max-w-4xl text-zinc-400'>
            Berikut ini adalah proyek-proyek yang telah kami selesaikan dan yang sedang kami kerjakan di HJK Jaya Abadi. Klik pada gambar untuk mempelajari lebih detail tentang proyek-proyek kami dari tahun 2018 hingga 2023.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
          {dataCard.map((data, index) => (showAll || index < 3) && (
            <Card
              key={index}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
        {!showAll ? (
          <div className='flex justify-center'>
            <button
              onClick={toggleShowAll}
              className='px-4 py-2 rounded-md font-medium text-sm text-white bg-blue-500 hover:bg-blue-400 cursor-pointer'
            >
              Show More
            </button>
          </div>
        ) : (
          <div className='flex justify-center'>
            <button
              onClick={toggleShowAll}
              className='px-4 py-2 rounded-md font-medium text-sm text-white bg-red-500 hover:bg-red-400 cursor-pointer'
            >
              Show Less
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Project;
