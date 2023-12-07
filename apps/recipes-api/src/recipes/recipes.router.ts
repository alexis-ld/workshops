import { Router } from 'express';
import { inject } from '../di';
import { RECIPES_REPOSITORY_TOKEN } from './recipes.repository'

export const recipesRouter = Router();

recipesRouter.get('/recipes', async (req, res) => {
  const repo = inject(RECIPES_REPOSITORY_TOKEN);


  const keyword = req.query.keyword;
  if (keyword) {
    // todo: get recipes by keyword
    res.send({ message: "not implemented" });
  }

  const body = { items: await repo.getRecipes() };

  res.send(body);
});
