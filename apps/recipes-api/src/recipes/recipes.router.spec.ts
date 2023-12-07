import { recipesRouter } from './recipes.router';
import { createTestingClient } from '../testing/create-testing-client';
import { register } from '../di';
import { RECIPES_REPOSITORY_TOKEN } from './recipes.repository';
import { RecipesRepositoryFake } from './recipes.repository.fake';

describe(recipesRouter.name, () => {
  it('should get recipes', async () => {
    const { client } = setUp();

    const response = await client.get('/recipes');

    expect(response.statusCode).toBe(200);
    expect(response.body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'rec_1',
        }),
      ])
    );
  });

  it('should get filtered recipes', async () => {
    const { client } = setUp();

    const response = await client.get('/recipes?keywords=test');

    expect(response.statusCode).toBe(200);
    expect(response.body.items).toEqual([
      expect.objectContaining({
        id: 'rec_2',
      }),
    ]);
  });

  it.skip('should add existing recipe to favorites', async () => {
    const { client } = setUp();

    const response = await client
      .put('/fav')
      .send({ id: 'rec_3' });

    expect(response.statusCode).toBe(200);
  });

  it.skip('should get my existing favorites', async () => {
    const { client } = setUp();

    const response = await client
      .put('/fav')
      .send({ id: 'rec_3' });

    expect(response.statusCode).toBe(200);

    const response2 = await client.get('/fav');

    expect(response2.statusCode).toBe(200);
    expect(response2.body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'rec_3',
        }),
      ])
    );

  });
});

function setUp() {
  const fakeRepo = new RecipesRepositoryFake();
  register(RECIPES_REPOSITORY_TOKEN, { useValue: fakeRepo });
  return createTestingClient(recipesRouter);
}
