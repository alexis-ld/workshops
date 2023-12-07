import { expect, test } from '@playwright/experimental-ct-react';
import Recipes from './recipes';
import { WithRecipesClientFake } from './recipes.client.fake';

test('Recipes is ok', async ({ page, mount }) => {
  const component = await mount(
    <WithRecipesClientFake>
      <Recipes />
    </WithRecipesClientFake>
  );

  await expect(component.getByRole('listitem')).toContainText(['1 pound pasta', '1/4 cup olive oil', '3 cloves garlic, minced', '1 (14.5-ounce) can diced tomatoes, undrained', '2 tablespoons tomato paste', '1/2 cup fresh basil, chopped', '1/2 cup heavy cream', 'Salt and pepper to taste']);

  await expect(component).toContainText('Creamy Tomato Basil Pasta');
  await expect(component).toContainText('Chili Cheese Quesadillas test');
});
