import React from 'react'

const LiveAttendance = () => {
  return (
    <section className='w-full justify-center items-center py-10'>
        <div className='h-[85vh] mx-auto w-3/4 border border-black space-y-10'>
            <div className='flex justify-center items-center w-full border border-black'>
                <p className='text-4xl font-semibold'>Live Attendance</p>
            </div>
            <div className='w-full border border-black h-[70vh]'>
                <div className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>Student id</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>Student name</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>Department</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>Department</p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                        <p className='text-base'>43567</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>stdddddddd</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>computing</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>computing</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                        <p className='text-base'>43567</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>stdddddddd</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>computing</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>computing</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default LiveAttendance
