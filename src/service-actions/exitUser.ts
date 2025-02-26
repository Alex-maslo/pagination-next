"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const exitUser = async () => {
  (await cookies()).delete("user");
  redirect("/");
};
