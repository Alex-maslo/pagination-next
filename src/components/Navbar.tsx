import React from "react";
import { cookies } from "next/headers";
import { loginUserAndGetToken } from "@/service-actions/loginUserAndGetToken";
import { exitUser } from "@/service-actions/exitUser";
import Link from "next/link";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import Image from "next/image";

const Navbar = async () => {
  const cookieStore = await cookies();
  const isAuth = cookieStore.has("user");

  const value = cookieStore.get("user")?.value as string;
  const user: IUserWithTokens = value ? JSON.parse(value) : null;

  return (
    <div>
      <div className="sm:flex sm:flex-row flex-col gap-3 justify-around navbar bg-neutral text-neutral-content">
        {isAuth ? (
          <>
            <div className="flex justify-between sm:w-5/12">
              <Link className="btn btn-ghost text-xl" href={"/"}>
                Home
              </Link>
              <Link className="btn btn-ghost text-xl" href={"/recipes"}>
                Recipes
              </Link>
              <Link className="btn btn-ghost  text-xl" href={"/users"}>
                Users
              </Link>
            </div>

            <h2 className="text-orange-500 font-bold  text-xl">
              {user.firstName} {user.lastName}
            </h2>

            <div className="avatar ">
              <div className="h-[44px] rounded-full">
                <Image
                  src={user.image}
                  alt={user.firstName}
                  width={400}
                  height={400}
                />
              </div>
            </div>

            <button onClick={exitUser} className="btn btn-primary text-xl">
              Exit
            </button>
          </>
        ) : (
          <button
            onClick={loginUserAndGetToken}
            className="btn btn-ghost text-xl"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
