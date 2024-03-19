import React from 'react'

const Home = () => {
  return (
    <section className='w-full justify-center items-center py-10'>
        <div className='h-[80vh] mx-auto w-3/4 border border-black'>
            <div className='w-full grid grid-cols-2 gap-20'>
                <div className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Device Management</p>
                </div>
                <div className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Student Attendance</p>
                </div>
                <div className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Device Simulator</p>
                </div>
                <div className='w-full h-[35vh] flex justify-center items-center border border-black'>
                    <p>Device Management</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
