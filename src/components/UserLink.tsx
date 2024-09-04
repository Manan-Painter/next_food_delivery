'use client'

import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useCartstore } from '@/utils/store'

const UserLink = () => {

    const { status } = useSession();
    // const { clear } = useCartstore()

    const handleLogout = async () => {
     
      localStorage.removeItem("cart"); // Remove cart data from local storage
      await signOut(); // Sign out the user
    };

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/order">Order</Link>
          <span className="ml-4 cursor-pointer" onClick={handleLogout}>
            Logout
          </span>
        </div>
      ) : (
        <Link className="hover:text-black" href="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default UserLink
