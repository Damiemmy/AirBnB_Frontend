'use server'
import { cookies } from "next/headers"

export async function handleLogin(userId, accessToken, refreshToken) {
    const cookieStore = await cookies(); // ✅ MUST await

    cookieStore.set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });

    cookieStore.set('session_refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });

    cookieStore.set('session_accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/'
    });
}


export async function resetAuthCookies() {
    const cookieStore = await cookies(); // ✅ MUST await

    cookieStore.set('session_userid', '', { maxAge: 0 });
    cookieStore.set('session_accessToken', '', { maxAge: 0 });
    cookieStore.set('session_refreshToken', '', { maxAge: 0 });
}


export async function getUserId() {
    const cookieStore = await cookies(); // ✅ MUST await

    const userId = cookieStore.get('session_userid')?.value;
    return userId ?? null;
}