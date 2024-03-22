import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-[8vh] flex justify-between border border-black content-center items-center px-20'>
        <Link to={'/'} className='border border-black'>
            <p>Logo</p>
        </Link>
        <div className='border border-black'>
            <ul className='flex space-x-4'>
                <li>Device Management</li>
                <li>Live Attendance</li>
                <li>Device Simulator</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
