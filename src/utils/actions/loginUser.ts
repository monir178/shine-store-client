"use server";

import { cookies } from "next/headers";
import { TUserLoginData } from "@/app/login/page";

export const loginUser = async (data: TUserLoginData) => {
    const res = await fetch(`${process.env.BACKEND_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),

        cache: "no-store",
    });

    const userInfo = await res.json();

    if (userInfo?.accessToken) {
        cookies().set({
            name: 'accessToken',
            value: userInfo.accessToken,
            httpOnly: true,
            path: '/',
        })
    }

    return userInfo;
}