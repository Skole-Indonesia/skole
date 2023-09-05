'use client'
import { useState, useEffect } from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import ActiveLink from '~/app/components/activeLinkNavItem';

export default function NavbarWithDropdown() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/classroom' || pathname === '/live-class') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname]);

  const handleDropdownClick = () => {
    setIsActive(true);
  };

  return (
    <div className="navbar bg-blue-500 fixed top-0 z-10 w-full">
      <div className="container mx-auto">
        <Navbar fluid className="bg-blue-500">
          <Link href="/">
            <img
              alt="Skole Indonesia Logo"
              className="mr-3 h-6 sm:h-9"
              src="/vercel.svg"
            />
          </Link>
          <div className="flex md:order-2">
            <Dropdown
              inline
              label={
                <Avatar alt="User settings" img="https://upload.wikimedia.org/wikipedia/commons/6/66/Puan_Maharani%2C_Ketua_DPR_RI.jpg" rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <ActiveLink href="/">Home</ActiveLink>
            <Dropdown
              inline
              className={`${isActive ? 'text-white' : 'text-slate-500'} bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2`}
              label={
                <span
                  className={`${isActive ? 'text-white' : 'text-slate-500'} bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2`}
                >Product</span>
              }
            >
              <ActiveLink href="/classroom">Classroom</ActiveLink>
              <ActiveLink href="/live-class">Live Class</ActiveLink>
              <ActiveLink href="/counseling">Konseling</ActiveLink>
            </Dropdown>
            <ActiveLink href="/article">Article</ActiveLink>
            <ActiveLink href="/article">Tentang Kami</ActiveLink>
            <ActiveLink href="/article">Kontakt</ActiveLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
