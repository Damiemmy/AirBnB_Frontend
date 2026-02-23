'use server'
import { cookies } from "next/headers"

export async function handleLogin(userId,accessToken,refreshToken){
    cookies().set('session_userid',userId,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, //One Week,
        path:'/'
    });
    cookies().set('session_refreshToken',refreshToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, //One Week,
        path:'/'
    });
    cookies().set('session_accessToken',accessToken,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 ,//60 minutes,
        path:'/'
    });
    
}

export async function resetAuthCookies(){
    cookies().set('session_userid', '')
    cookies().set('session_accessToken', '')
    cookies().set('session_refreshToken', '')
}

//
//Get Data
export async function getUserId(){
    const userId=cookies().get('user_id')?.value
    return userId ? userId : null
}