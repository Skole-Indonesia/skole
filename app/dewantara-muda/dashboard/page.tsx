'use client'
import React from 'react'
import Head from 'next/head'
import Navbar from "~/app/components/navbar"
import Sidebar from "~/app/components/sidebarDewantaraMuda"
import { Button } from 'flowbite-react';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <Head>
        <title>Testing</title>
      </Head>
      <div className='wrapper'>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="main-content pt-20 w-full">
            <div style={{ background: 'url(https://indopolitika.com/wp-content/uploads/2019/07/PDIP-3.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '500px' }} className='bg-image-thumbnails'>
              <div className="thumbnails-wrapper p-4 h-full flex flex-col justify-between">
                <Button color="light" className="bg-white bottom-0 flex ms-auto">
                  :
                </Button>
                <Button color="light" className="bg-white bottom-0 flex me-auto">
                  Ubah foto kelompok
                </Button>
              </div>
            </div>
            <h1>Dashboard</h1>
            <div className="bg-yellow-200 h-[200vh]">
              <h1>Ini header bos</h1>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default page