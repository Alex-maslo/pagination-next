import React from "react";
import Link from "next/link";

const RecipeTags = ({ array }: { array: string[] }) => {
  if (!array) return <h2> No array</h2>;

  return (
    <ul className="w-full list-disc grid grid-cols-3 gap-2 ">
      {array.map((element: string, index: number) => {
        return (
          <li className="ml-6" key={index}>
            <Link href={`/recipes/${element}`}>{element}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RecipeTags;
