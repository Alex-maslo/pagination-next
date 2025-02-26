"use server";

import axios from "axios";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import { cookies } from "next/headers";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/auth",
});

export const loginUserAndGetToken = async () => {
  const { data }: { data: IUserWithTokens } = await axiosInstance.post(
    "/login",
    {
      username: "michaelw",
      password: "michaelwpass",
      expiresInMins: 30,
    },
  );

  (await cookies()).set("user", JSON.stringify(data));
};
