import React from "react";
import { getUserFromCookie } from "@/service-actions/getUserFromCookie";
import { IUserWithTokens } from "@/models/IUserWithTokens";
import { axiosInstance } from "@/service-actions/loginUserAndGetToken";
import { IResources } from "@/models/IResources";

const RecipesPage = async () => {
  const user: IUserWithTokens = await getUserFromCookie();

  const { data }: { data: IResources } = await axiosInstance.get("/recipes", {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  });

  console.log(data.recipes);

  return <div>RecipesPage</div>;
};

export default RecipesPage;
