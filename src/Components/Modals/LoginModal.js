import React from 'react'
import Modals from './modals'
import UserLoginModal from '@/hooks/UseLoginModal'

const LoginModal = () => {
  const loginmodal = UserLoginModal()
  const content = [
    <h1>Welcome to UCOF'S-BnB, please log in</h1>
  ]

  return (
    <Modals 
      isOpen={loginmodal.isOpen} 
      close={loginmodal.closeModal} 
      label='login' 
      content={content} 
    />
  )
}

export default LoginModal
