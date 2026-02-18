import React from 'react'
import Modals from './modals'
import UserLoginModal from '@/hooks/UseLoginModal'
import CustomButton from '../Forms/CustomButton'

const LoginModal = () => {
  const loginmodal = UserLoginModal()
  const content = [
    <>
      
      <form className='space-y-4 '>
        <input type='email' placeholder='your e-mail address' className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
        <input type='password' placeholder='enter your password' className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
        <div className='p-5 bg-[#ff385c] text-white rounded-xl opacity-80'>The Error Message</div>
        <CustomButton
        label='submit'
        onClick={()=>console.log('text')}/>

      </form>
    </>
    
  ]

  return (
    <Modals 
      isOpen={loginmodal.isOpen} 
      close={loginmodal.closeModal} 
      label='Log In' 
      content={content} 
    />
  )
}

export default LoginModal
