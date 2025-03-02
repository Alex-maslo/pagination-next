import React, { FC } from "react";
import { IRecipe } from "@/models/IRecipe";
import RecipeTags from "@/components/RecipeTags";
import Link from "next/link";

type RecipeProps = { recipe: IRecipe };

const Recipe: FC<RecipeProps> = ({ recipe }) => {
  return (
    <>
      <div className="relative p-4 bg-base-100 h-[26vh] border border-purple-500 rounded-lg shadow-sm">
        <div className="">
          <h2 className="font-bold text-2xl text-orange-700">{recipe.name}</h2>
          <Link href={`/recipes/${recipe.cuisine}`}>{recipe.cuisine}</Link>
          <div className="absolute bottom-2">
            <RecipeTags array={recipe.tags} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
