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
        <main className="main-content pt-20 w-full h-screen">
          <div className="container mx-auto h-full">
            <div className="flex md:flex-row flex-col h-full">
              <img src="https://indopolitika.com/wp-content/uploads/2019/07/PDIP-3.jpg" className='w-50' alt="" />
              <div className='w-50 bg-blue-500'>
                <h1>
                  Sorry, we can't find the page you looking for
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default page