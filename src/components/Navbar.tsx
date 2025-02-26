import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around navbar bg-neutral text-neutral-content">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Home
        </Link>
        <Link href={"/recipes"} className="btn btn-ghost text-xl">
          Recipes
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
