'use client'

import React from 'react';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Container from '../components/Container';
import { MdPeople, MdFavorite, MdTimer, MdMoneyOff, MdMessage, MdVerifiedUser } from 'react-icons/md';

const Cardlist = [
  {
    icon: <MdPeople size={32} />,
    title: 'Tim Profesional',
    label: 'Tim kami terdiri dari para insinyur struktur yang terampil dan berdedikasi, yang siap memberikan solusi terbaik dan paling efisien untuk kebutuhan struktur proyek Anda.',
  },
  {
    icon: <MdFavorite size={32} />,
    title: 'Jaminan Kepuasan',
    label: 'Kami memberikan jaminan kepuasan pelanggan dengan layanan terbaik dan solusi efisien untuk proyek Anda.',
  },
  {
    icon: <MdTimer size={32} />,
    title: 'Layanan Efisien dan Cepat',
    label: 'Kami menyediakan layanan cepat dan efisien untuk memenuhi kebutuhan proyek Anda dengan tepat waktu.',
  },
  {
    icon: <MdMoneyOff size={32} />,
    title: 'Harga Terjangkau',
    label: 'Kami menawarkan harga terjangkau untuk solusi struktur berkualitas tinggi bagi proyek Anda.',
  },
  {
    icon: <MdMessage size={32} />,
    title: 'Konsultasi Gratis',
    label: 'Hubungi kami untuk konsultasi gratis dan kami akan membantu Anda memahami kebutuhan proyek Anda.',
  },
  {
    icon: <MdVerifiedUser size={32} />,
    title: 'Berpengalaman dan Bersertifikasi',
    label: 'Tim kami memiliki pengalaman dan sertifikasi untuk memberikan solusi yang tepat bagi proyek Anda.',
  },
];

const TentangKami = () => {
  return (
    <div className='h-screen w-full'>
      <img src="/images/hero2.jpg" alt="hero" className='h-full w-full' />
      <div className="h-full w-full absolute inset-0 bg-black/70 "></div>
      <Container>
        <Heading
          title='Tentang Kami'
          text='Dengan pengalaman yang luas dan tim yang terlatih, kami siap membantu Anda mengatasi setiap tantangan yang mungkin timbul dalam proyek Anda. Dapatkan solusi yang tepat dan inovatif untuk memastikan kesuksesan proyek Anda. Segera hubungi kami untuk informasi lebih lanjut tentang layanan kami.'
        />
        <div className='flex flex-col pt-12 pb-12 gap-6'>
          <h3 className='text-2xl font-semibold tracking-tight'>Sekilas tentang kami</h3>
          <div className='flex flex-col gap-4 leading-7 text-justify'>
            <p >
              PT HJK JAYA ABADI adalah sebuah perusahaan konsultan konstruksi, pengadaan, dan instalasi profesional yang telah berpengalaman sejak tahun 2012. Kami berkomitmen untuk memberikan solusi terbaik bagi setiap proyek yang kami tangani. Sebagai perusahaan yang sah secara hukum, kami telah disertifikasi sesuai dengan standar industri dan telah dipercayai oleh ratusan klien.
            </p>
            <p>
              Kami menyediakan beragam layanan, termasuk perhitungan struktur, analisis geoteknik, investigasi tanah, perkuatan struktur, analisis geometrik jalan raya, mekanikal, elektrikal, dan plumbing, untuk memenuhi kebutuhan klien dalam berbagai proyek. Tim kami terdiri dari para ahli yang kompeten di bidangnya masing-masing dan mampu memberikan solusi yang tepat dan efektif.
            </p>
            <p >
              Selain itu, kami telah berhasil menyelesaikan berbagai proyek, baik proyek pemerintah maupun swasta, dengan hasil yang memuaskan. Kami selalu mengutamakan kepuasan klien dan memastikan bahwa setiap proyek selesai tepat waktu dan sesuai dengan anggaran.
            </p>
            <p >
              Kami juga menyediakan layanan konsultasi gratis untuk membantu klien memahami kebutuhan mereka dan memberikan solusi yang sesuai. Kami meyakini bahwa kerjasama yang baik dengan klien adalah kunci kesuksesan proyek, sehingga kami selalu berusaha untuk bekerja dengan efisien dan efektif.
            </p>
            <p >
              Jika Anda memerlukan layanan perhitungan struktur, analisis geoteknik, investigasi tanah, perkuatan struktur, analisis geometrik jalan raya, mekanikal, elektrikal, dan plumbing, jangan ragu untuk menghubungi kami.
            </p>
            <p >
              Kami siap membantu Anda dalam setiap tahap proyek Anda, mulai dari perencanaan hingga implementasi. Kami menjamin bahwa setiap solusi yang kami tawarkan akan sesuai dengan kebutuhan khusus proyek Anda. Jangan ragu untuk menghubungi kami untuk mendapatkan konsultasi gratis dan memulai kerjasama yang sukses. Terima kasih telah memilih PT Rumah Struktur Engineering sebagai mitra perencanaan struktur Anda.
            </p>
          </div>
          <div className='py-12'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-2xl font-semibold tracking-tight'>Kenapa memilih kami?</h1>
              <div className='grid grid-cols-3 gap-4'>
                {Cardlist.map((list, index) => (
                  <div key={index} className='border-[1px] p-6 gap-4 rounded-lg flex justify-between'>
                    <div className='translate-y-1'>
                      {list.icon}
                    </div>
                    <div className='flex flex-col space-y-4'>
                      <h3 className='text-xl font-semibold'>
                        {list.title}
                      </h3>
                      <p className='text-sm text-zinc-400'>
                        {list.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default TentangKami;
