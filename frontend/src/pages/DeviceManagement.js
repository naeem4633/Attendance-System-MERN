import React from 'react'
import { Link } from 'react-router-dom';
 
const DeviceManagement = ({deviceList}) => {
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

                {deviceList.map((device, index) => (
                <Link to={`/device-details/${device.device_id}`} key={index} className='w-full grid grid-cols-4'>
                    <div className='w-full border border-black'>
                    <p className='text-base'>{device.device_id}</p>
                    </div>
                    <div className='w-full border border-black'>
                    <p className='text-base'>{device.name}</p>
                    </div>
                    <div className='w-full border border-black'>
                    <p className='text-base'>{device.unique_identifier}</p>
                    </div>
                    <div className='w-full border border-black'>
                    <p className='text-base'>
                        {device.contains_rfid ? 'rfid, ' : ''}
                        {device.contains_facial_recognition ? 'face, ' : ''}
                        {device.contains_keypad ? 'keypad, ' : ''}
                        {device.contains_biometric ? 'bio, ' : ''}
                    </p>
                    </div>
                </Link>
                ))}

            </div>
        </div>
    </section>
  )
}

export default DeviceManagement
