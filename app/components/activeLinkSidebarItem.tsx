'use client'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

const activeLink: React.FC<ActiveLinkProps> = ({ href, children }) => {
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
    <p
      className={`${isActive ? "text-white bg-blue-500 hover:bg-blue-600 " : "text-slate-600 hover:bg-slate-100"
        } rounded-md px-4 py-2`}
    >
      <Link href={href}>
        {children}
      </Link>
    </p>
  );
};

export default activeLink