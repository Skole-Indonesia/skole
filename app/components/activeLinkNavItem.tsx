'use client'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link";

interface ActiveLinkNavItemProps {
  href: string;
  children: React.ReactNode;
}

const activeLinkNavItem: React.FC<ActiveLinkNavItemProps> = ({ href, children }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isActive, setIsActive] = useState(false);
  console.log("Dari is Active : " + isActive)

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`
    const url = `${pathname}`
    console.log("Ini url " + url)
    console.log("Ini href " + href)
    setIsActive(url === href);
  }, [pathname, searchParams])

  return (
    <Link href={href}
      className={`${isActive ? "text-white" : "text-slate-300"
        } bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2`}
    >
      {children}
    </Link>
  );
};

export default activeLinkNavItem