import React from "react";
import { getUserFromCookie } from "@/service-actions/getUserFromCookie";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import { IRecipe } from "@/models/IRecipe";
import Recipe from "@/components/Recipe";
import Pagination from "@/components/Pagination";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const RecipePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const user: IUserWithTokens = await getUserFromCookie();

  const params = await searchParams;
  const page: number = Number(params.page) || 1;

  const res = await fetch(
    `https://dummyjson.com/auth/recipes?limit=12&skip=${(page - 1) * 12}`,
    {
      method: "GET" /* or POST/PUT/PATCH/DELETE */,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  const recipes: IRecipe[] = (await res.json()).recipes.map(
    (element: IRecipe) => {
      return element.name === "Russian Borscht" || element.cuisine === "russian"
        ? { ...element, name: "Ukrainian Borscht", cuisine: "Ukrainian" }
        : element;
    },
  );

  return (
    <div>
      {recipes ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <Pagination page={page} />
        </>
      ) : (
        <>
          <h2>Not found</h2>
        </>
      )}
    </div>
  );
};

export default RecipePage;
