"use client"

import { useRouter } from "next/navigation"
import MenuLink from "./Navbar/MenuLink"
import { resetAuthCookies } from "@/app/lib/action"

const LogoutButton=()=>{
    const router=useRouter()
    const submitLogout=async()=>{
        resetAuthCookies();
        router.push('/')
    }

    return(
    <MenuLink
        label='Log out'
        onClick={submitLogout}
    />
    )
}

export default LogoutButton;