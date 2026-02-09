import Conversation from '@/Components/inbox/Conversation'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-[1500px] px-6 pb-6 mx-auto space-y-4'>
        <h1 className='py-6 text-2xl'>Inbox</h1>
            <Conversation/>
            <Conversation/>
            <Conversation/>
      
    </main>
  )
}

export default page
