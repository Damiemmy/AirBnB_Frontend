import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchFilters from './SearchFilters'
import UserNav from './UserNav'
import AddPropertyButton from './AddPropertyButton'

const Navbar = () => {
  return (
    <nav className='w-full fixed left-0 top-0 py-6 border-b border-b-gray-200 bg-white z-10'>
        <div className='max-w-[1500px] mx-auto px-6'>
            <div className='flex justify-between items-center'>
                <Link href={'/'}>
                    <Image src='/logo.png'
                    alt='DjangoBnB logo'
                    width={180}
                    height={38}/>
                </Link>

                <div className='flex space-x-6 '>
                    <SearchFilters/>
                </div>
                
                <div className='flex space-x-6 items-center'>
                    <AddPropertyButton/>
                    <UserNav/>
                </div>


            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
