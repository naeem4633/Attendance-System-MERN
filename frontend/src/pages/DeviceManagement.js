import React from 'react'

const DeviceManagement = () => {
  return (
    <section className='w-full justify-center items-center py-10'>
        <div className='h-[85vh] mx-auto w-3/4 border border-black space-y-10'>
            <div className='flex justify-center items-center w-full border border-black'>
                <p className='text-4xl font-semibold'>Device List</p>
            </div>
            <div className='w-full border border-black h-[70vh]'>
                <div className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>id</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>name</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>name</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-xl font-semibold'>sensors</p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                        <p className='text-base'>43567</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>dev6576890-0</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>tuyioljhvgctfyguh</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>rfid, bio, face</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                        <p className='text-base'>43567</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>dev6576890-0</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>tuyioljhvgctfyguh</p>
                    </div>
                    <div className='w-full border border-black'>
                        <p className='text-base'>rfid, bio, face</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default DeviceManagement
