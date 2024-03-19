import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[8vh] flex justify-between border border-black content-center items-center px-20'>
        <div className='border border-black'>
            <p>Logo</p>
        </div>
        <div className='border border-black'>
            <ul className='flex space-x-4'>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
