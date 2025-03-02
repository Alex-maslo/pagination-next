import React from "react";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import { getUserFromCookie } from "@/service-actions/getUserFromCookie";
import { IRecipe } from "@/models/IRecipe";
import Recipe from "@/components/Recipe";

type Params = Promise<{ tag: string }>;

const TagPage = async (props: { params: Params }) => {
  const params = await props.params;
  const tag: string = params.tag;

  const user: IUserWithTokens = await getUserFromCookie();

  const res = await fetch(`https://dummyjson.com/auth/recipes/tag/${tag}`, {
    method: "GET" /* or POST/PUT/PATCH/DELETE */,
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const recipes: IRecipe[] = (await res.json()).recipes;

  return (
    <div>
      {recipes ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Not found</h2>
        </>
      )}
    </div>
  );
};
export default TagPage;
