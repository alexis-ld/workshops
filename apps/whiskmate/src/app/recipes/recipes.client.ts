import { RecipesResponseDto } from '@whiskmate/shared';
import { createContext } from 'react';

export interface RecipesClient {
  getRecipes(): Promise<RecipesResponseDto>;
}

class RecipesClientImpl implements RecipesClient {
  async getRecipes() {
    return { items: [] } as RecipesResponseDto;
  }
}

export const RecipesClientProvider = createContext(new RecipesClientImpl());
