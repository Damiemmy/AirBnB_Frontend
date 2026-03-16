'use client'
import React, { useEffect } from 'react'
import CustomButton from '../Forms/CustomButton'
import useWebSocket from 'react-use-websocket'

const ConversationDetail = ({conversation,userId,token}) => {
  const myUser=conversation.users.find((user)=> user.id == userId)
  const otherUser=conversation.users.find((user)=> user.id != userId)

  const{sendJsonMessage,lastJsonMessage,readyState}= useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`,
    {
      share: false,
      shouldReconnect: () => True,
    },
  )

  useEffect(()=>{
    console.log('connection state changed',readyState);
  },[readyState])


  return (
    <div className='max-h-[400px] overflow-auto flex flex-col space-y-4'>
      <div className='bg-gray-200 rounded-xl px-6 py-4 w-[80%]'>
        <p className='font-bold text-gray-500'>John Doe</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam?</p>
      </div>
      <div className='bg-blue-200 rounded-xl ml-[20%] px-6 py-4 w-[80%]'>
        <p className='font-bold text-gray-500'>Damisa Emmanuel</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam?</p>
      </div>
      <div className='mt-4 px-6 py-4 flex border items-center border-gray-300 space-x-4 rounded-xl'>
        <input
          type='text'
          placeholder='type your message...'
          className='w-full rounded-xl py-4 px-6 bg-gray-200'
        />
        <CustomButton label='Send'/>
        

      </div>

      
      
    </div>
  )
}

export default ConversationDetail
