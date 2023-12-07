import { Router } from 'express';
import { Recipe } from './recipe'

// import { inject } from '../di';

export const recipesRouter = Router();

recipesRouter.get('/recipes', async (_, res) => {
  // const repo = inject(GREETINGS_REPOSITORY_TOKEN);
  //
  // const body: GreetingsResponseDto = {
  //   items: await repo.getGreetings(),
  // };

  const recipe: Recipe = {
    id: "1",
    name: 'test',
    description: 'test',
    pictureUrl: 'test',
    steps: [],
    ingredients: [],
  }

  res.send([recipe]);
});
