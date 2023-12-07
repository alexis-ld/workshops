import { createContext } from 'react';

class RecipesClient {
  async getRecipes() {
    return null;
  }
}

class RecipesClientImpl extends RecipesClient {
  async getRecipes() {
    return null;
  }
}

export const RecipesClientProvider = createContext(new RecipesClientImpl());
