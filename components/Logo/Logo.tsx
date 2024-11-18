import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-baseline space-x-1">
          <p className="font-bold md:text-xl text-2xl !text-[--primary-color] lg:text-3xl">
            Nduka.
          </p>
          <p className=" md:text-xl text-black/60 lg:text-">health.</p>
        </Link>
  )
}
