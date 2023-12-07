import {Recipe} from './recipe';
import {delay} from 'tsyringe';
import {JSONSyncPreset} from 'lowdb/lib/node';

export interface RecipesRepository {
  getRecipes(): Promise<Recipe[]>;
}

class GreetingsRepositoryImpl {
  private _db = JSONSyncPreset('greetings.db.json', {
    recipes: [],
  });

  constructor() {
    this._db.write();
  }

  async getRecipes(): Promise<Recipe[]> {
    this._db.read();
    return this._db.data.recipes;
  }
}


export const RECIPES_REPOSITORY_TOKEN = delay<RecipesRepository>(
  () => GreetingsRepositoryImpl
);
