import { expect, test } from '@playwright/experimental-ct-react';
import Recipes from './recipes';
import { WithRecipesClientFake } from './recipes.client.fake';

test('Recipes is ok', async ({ page, mount }) => {
  const component = await mount(
    <WithRecipesClientFake>
      <Recipes />
    </WithRecipesClientFake>
  );

  await expect(component).toContainText('Creamy Tomato Basil Pasta');
  await expect(component).toContainText('Chili Cheese Quesadillas test');
});
