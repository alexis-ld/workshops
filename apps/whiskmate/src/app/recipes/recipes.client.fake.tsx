import { RecipesResponseDto } from '@whiskmate/shared';
import React, { ReactNode } from 'react';
import { RecipesClient, RecipesClientProvider } from './recipes.client';

export class RecipesClientFake implements RecipesClient {
  async getRecipes(): Promise<RecipesResponseDto> {
    return {
      items: [{
        "id": "rec_1",
        "name": "Creamy Tomato Basil Pasta",
        "description": "A simple and delicious pasta dish with a creamy tomato basil sauce.",
        "pictureUrl": "https://dishingouthealth.com/wp-content/uploads/2022/09/CreamyTomatoPasta_Square.jpg",
        "steps": [
          "Cook the pasta according to package directions.",
          "While the pasta is cooking, heat the olive oil in a large skillet over medium heat.",
          "Add the garlic and cook until fragrant, about 30 seconds.",
          "Add the diced tomatoes, tomato paste, and basil. Bring to a simmer and cook for 10 minutes.",
          "Stir in the heavy cream and season with salt and pepper to taste.",
          "Drain the pasta and add it to the skillet with the sauce. Toss to coat.",
          "Serve immediately with grated Parmesan cheese."
        ],
        "ingredients": [
          "1 pound pasta",
          "1/4 cup olive oil",
          "3 cloves garlic, minced",
          "1 (14.5-ounce) can diced tomatoes, undrained",
          "2 tablespoons tomato paste",
          "1/2 cup fresh basil, chopped",
          "1/2 cup heavy cream",
          "Salt and pepper to taste"
        ]
      }, {
        "id": "rec_2",
        "name": "Chili Cheese Quesadillas test",
        "description": "A classic comfort food that's easy to make and always satisfying.",
        "pictureUrl": "https://mylifecookbook.com/wp-content/uploads/2022/11/chili-quesadilla-closeupSQ.jpg",
        "steps": [
          "Heat a large skillet over medium heat.",
          "Place a tortilla on the skillet and sprinkle with cheese.",
          "Top the cheese with your favorite chili toppings, such as shredded beef, beans, and onions.",
          "Add another tortilla to the top and press down gently.",
          "Cook for 2-3 minutes per side, or until the tortilla is golden brown and the cheese is melted.",
          "Cut the quesadilla into wedges and serve immediately."
        ],
        "ingredients": [
          "2 large flour tortillas",
          "1 cup shredded cheddar cheese",
          "1/2 cup chili, heated",
          "Shredded beef, beans, onions, and other toppings of your choice"
        ]
      }]
    };
  }
}

export function WithGreetingsClientFake({ children }: { children: ReactNode }) {
  return (
    <RecipesClientProvider.Provider value={new RecipesClientFake()}>
      {children}
    </RecipesClientProvider.Provider>
  );
}
