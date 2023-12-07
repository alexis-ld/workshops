import { Router } from 'express';
import { inject } from '../di';
import { RECIPES_REPOSITORY_TOKEN } from './recipes.repository'
import { RecipesResponseDto } from '@whiskmate/shared'
import {Recipe} from './recipe';

export const recipesRouter = Router();

const filterRecipes = (recipes: Recipe[], keywords: string[]) => {
  return recipes.filter((recipe) => {
    return keywords.every((keyword) => {
      return JSON.stringify(recipe).includes(keyword)
    })
  })
};

recipesRouter.get('/recipes', async (req, res) => {
  const repo = inject(RECIPES_REPOSITORY_TOKEN);

  const recipes = await repo.getRecipes();

  const keywords = req.query.keywords;
  if (keywords) {
    switch (typeof keywords) {
      case "string":
        res.send({ items: filterRecipes(recipes, [keywords]) });
        return;
      case "object":
        if (Array.isArray(keywords)) {
          res.send({ items: filterRecipes(recipes, keywords as string[]) });
          return;
        }
        res.send({ items: [] });
        return;
      default:
        res.send({ items: [] });
        return;
    }
  }

  const body: RecipesResponseDto = { items: await repo.getRecipes() };

  res.send(body);
});

recipesRouter.get('/fav', async (_, res) => {
  const repo = inject(RECIPES_REPOSITORY_TOKEN);

  const recipes = await repo.getRecipes();

  const body: RecipesResponseDto = { items: recipes.filter((recipe) => recipe.fav) };

  res.send(body);
});

recipesRouter.put('/fav', async (req, res) => {
  // const repo = inject(RECIPES_REPOSITORY_TOKEN);

  const { recipeId } = req.body.id

  // todo: add to fav

  res.send({ message: `fav ${recipeId} added` });
  return;
})

recipesRouter.delete('/fav/:id', async (req, res) => {
  const id = req.params.id

  res.send({ message: `${id} deleted from fav` });
})
