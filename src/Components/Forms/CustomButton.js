import React from 'react'

const CustomButton = ({label,onClick}) => {
  return (
    <div onClick={onClick} className='text-white text-center w-[100px] py-4 rounded-xl bg-[#ff385c] hover:bg-[#d50027] cursor-pointer transition'>
        {label}
    </div>
  )
}

export default CustomButton
