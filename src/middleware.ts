import { cookies } from "next/headers";
import { IUserWithTokens } from "@/models/IUserWithTokens";

export const middleware = async () => {
  const cookieStore = await cookies();
  const value = cookieStore.get("user")?.value ?? "";

  let user: IUserWithTokens | null = null;
  try {
    user = value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Помилка парсингу кукі user:", error);
  }

  console.log(user?.accessToken);
};
