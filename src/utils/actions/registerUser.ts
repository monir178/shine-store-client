"use server"

import { TUserData } from "@/app/register/page";

export const RegisterUser = async (data: TUserData) => {
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    });

    const userInfo = await res.json();
    return userInfo;
}