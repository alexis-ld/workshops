import {Recipe} from './recipe';


export interface RecipesRepository {
  getRecipes(): Promise<Recipe[]>;
}
