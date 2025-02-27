import { IRecipe } from "@/models/IRecipe";

export interface IResources {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}
