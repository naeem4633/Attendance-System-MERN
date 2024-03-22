import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <section className='w-full justify-center items-center py-10'>
        <div className='h-[80vh] mx-auto w-3/4 border border-black'>
            <div className='w-full grid grid-cols-2 gap-20'>
                <Link to={'/device-management'} className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Device Management</p>
                </Link>
                <Link to={'/live-attendance'} className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Live Attendance</p>
                </Link>
                <Link to={'/device-simulator'} className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Device Simulator</p>
                </Link>
                <Link to={'/device-management'} className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Device Management</p>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Home
