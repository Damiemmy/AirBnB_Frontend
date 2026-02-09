import React from 'react'
import Modals from './modals'
import UserLoginModal from '@/hooks/UseLoginModal'
import CustomButton from '../Forms/CustomButton'
import UseSignupModal from '@/hooks/useSignupModal'

const SignupModal = () => {
  const signupmodal = UseSignupModal()
  const content = [
    <>
      <h1 className='mb-6 text-2xl '>Welcome to UCOF'S-BnB, please create an Account</h1>
      <form className='space-y-4 '>
        <input type='email' placeholder='your e-mail address' className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
        <input type='password' placeholder='enter your password' className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
        <input type='password' placeholder='confirm password' className='w-full h-[54px] px-4 border border-gray-300 rounded-xl'/>
        <div className='p-5 bg-[#ff385c] text-white rounded-xl opacity-80'>The Error Message</div>
        <CustomButton
        label='submit'
        onClick={()=>console.log('text')}/>

      </form>
    </>
    
  ]

  return (
    <Modals 
      isOpen={signupmodal.isOpen} 
      close={signupmodal.closeModal} 
      label='sign up' 
      content={content} 
    />
  )
}

export default SignupModal
