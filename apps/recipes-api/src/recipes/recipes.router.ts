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
