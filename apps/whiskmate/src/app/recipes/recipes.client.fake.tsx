import React, { ReactNode } from 'react';
import { RecipesClient, RecipesClientProvider } from './recipes.client';

export class RecipesClientFake implements RecipesClient {
  async getRecipes(): Promise<null> {
    return null;
  }
}

export function WithGreetingsClientFake({ children }: { children: ReactNode }) {
  return (
    <RecipesClientProvider.Provider value={new RecipesClientFake()}>
      {children}
    </RecipesClientProvider.Provider>
  );
}
