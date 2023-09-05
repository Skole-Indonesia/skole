'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from "~/app/components/navbar"
import Sidebar from "~/app/components/sidebarDewantaraMuda"
import { Button, Modal, Card } from 'flowbite-react';

const page = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

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
            <section>
              <div className="grid grid-cols-3">
                <div className='col-span-2 bg-red-500'>
                  <h1>Senang Belajar</h1>
                  <p>Kami adalah kelompok Senang Belajar yang berasal dari Solo, Jawa Tengah. Study hard, play hard.</p>
                  <h1>Dewantara Muda</h1>
                  <div className="flex justify-between items-center rounded-md border p-4">
                    <p>Akulah Arjuna</p>
                    <Button onClick={() => props.setOpenModal('pop-up')}>Edit Profile</Button>
                    <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <div className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                              Yes, I'm sure
                            </Button>
                            <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  <h1>Posting Materi</h1>
                  <input className='border' />
                  <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>
                        Noteworthy technology acquisitions 2021
                      </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                      </p>
                    </p>
                    <Button>
                      <p>
                        Read more
                      </p>
                      {/* <SeeSourceCodeForSVG /> */}
                    </Button>
                  </Card>
                </div>
                <div className='bg-green-300'>
                  <h1>Halo</h1>
                </div>
              </div>

            </section>
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