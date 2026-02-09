import React from 'react'
import CustomButton from '../Forms/CustomButton'

const ConversationDetail = () => {
  return (
    <div className='max-h-[400px] overflow-auto flex flex-col space-y-4'>
      <div className='bg-gray-200 rounded-xl px-6 py-4 w-[80%]'>
        <p className='font-bold text-gray-500'>John Doe</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsam?</p>
      </div>
      <div className='bg-blue-200 rounded-xl ml-[20%] px-6 py-4 w-[80%]'>
        <p className='font-bold text-gray-500'>Codemant</p>
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
