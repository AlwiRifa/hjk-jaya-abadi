'use client'

import Image from "next/image";
import React from "react";


const Client = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className='p-6 flex flex-col items-center justify-center text-center gap-4'>
        <h1 className='text-4xl font-semibold tracking-tight'>Klien kami</h1>
        <p className='max-w-4xl text-zinc-400'>PT HJK JAYA ABADI berpengalaman pada banyak pekerjaan yang melibatkan
          klien dari berbagai macam latar belakang, baik perusahaan swasta
          nasional di berbagai sektor usaha, lembaga pemerintah, BUMN, pemerintah
          daerah, yayasan, dan perseorangan.</p>
      </div>
      <div className="grid grid-cols-5 gap-4 p-6">
        <Image src='/images/wika.png' width='100' height='100' alt='wika' />
        <Image src='/images/wika.png' width='100' height='100' alt='wika' />
        <Image src='/images/wika.png' width='100' height='100' alt='wika' />
        <Image src='/images/wika.png' width='100' height='100' alt='wika' />
        <Image src='/images/wika.png' width='100' height='100' alt='wika' />
      </div>
    </div>
  );
};

export default Client;
