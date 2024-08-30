'use client'

import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const UserLink = () => {

    const { status } = useSession();

  return (
    <div>
        {status === "authenticated" ? (
            <div>
                <Link href="/order">Order</Link>
                <span className='ml-4 cursor-pointer' onClick={()=>signOut()}>Logout</span>
            </div>
          
        ) : (
          <Link className="hover:text-black" href="/login">
            Login
            </Link>
        )}
    </div>
  )
}

export default UserLink
