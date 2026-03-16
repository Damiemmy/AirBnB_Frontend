import ConversationDetail from '@/Components/inbox/ConversationDetail'
import React from 'react'
import { getUserId } from '@/app/lib/action'
import apiService from '@/services/ApiService'
import { getAccessToken } from '@/app/lib/action'

const page = async({params}) => {
  const userId=await getUserId()
  const token=await getAccessToken()
    if(!userId){
        return(
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>You need to be Authenticated...</p>
            </main>
        )
    }


  const conversation=await apiService.get(`/api/chat/${params.id}`)

  return (
    <main className='max-w-[1500px] px-6 pb-6 mx-auto space-y-4'>
      <ConversationDetail conversation={conversation} userId={userId} token={token}/>
    </main>
  )
}

export default page
