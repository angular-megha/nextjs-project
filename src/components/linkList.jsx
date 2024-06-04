import Link from 'next/link'
import React from 'react'

const LearnList = () => {
    const id = 2;
  return (
    <>
       <Link href='/admin/dashboard/'>Go to Dashboard</Link>
       <Link href={`/user/profile/${id}`}>Go to Profile</Link>
    </>
  )
}

export default LearnList