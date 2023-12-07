import { createContext } from 'react';

export interface RecipesClient {
  getRecipes(): Promise<null>;
}

class RecipesClientImpl implements RecipesClient {
  async getRecipes() {
    return null;
  }
}

export const RecipesClientProvider = createContext(new RecipesClientImpl());
