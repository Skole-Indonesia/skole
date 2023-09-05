'use client'
import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import ActiveLinkSidebar from '~/app/components/activeLinkSidebarItem';
import Avatar from '~/app/components/avatar'

export default function ContentSeparator() {
  const user = {
    name: 'Puan Maharani',
    role: 'Dewantara Muda',
    avatarUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/66/Puan_Maharani%2C_Ketua_DPR_RI.jpg',
  };
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='sticky top-0 h-screen pt-20'>
      <Avatar {...user}/>
      <div className='bg-slate-300 h-[1px] rounded-full w-full my-4 px-4'>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <ActiveLinkSidebar href="/dewantara-muda/dashboard">
            Dashboard
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/kelompok">
            Kelompok
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/tracking-pembelajaran-siswa">
            Tracking Pembelajaran Siswa
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/buat-akun-siswa">
            Buat Akun Siswa
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/daftar-siswa">
            Daftar Siswa
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/konseling-siswa">
            Konseling
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/pengaturan">
            Pengaturan
          </ActiveLinkSidebar>
          <ActiveLinkSidebar href="/dewantara-muda/logout">
            Logout
          </ActiveLinkSidebar>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}