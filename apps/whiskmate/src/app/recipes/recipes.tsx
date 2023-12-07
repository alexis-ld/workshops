import { RecipeDto } from '@whiskmate/shared';
import { useContext, useEffect, useState } from 'react';
import { RecipesClientProvider } from './recipes.client';

export function Recipes() {
  const client = useContext(RecipesClientProvider);
  const [recipes, setRecipes] = useState<RecipeDto[]>([]);
  const [recipesLoaded, setRecipesLoaded] = useState(false);

  useEffect(() => {
    client.getRecipes().then((recipes) => {
      setRecipes(recipes.items);
      setRecipesLoaded(true);
    }).catch(() => { console.log('cheh') });
  }, [client]);

  return (<p>
    {recipesLoaded && recipes.map((recipe, idx) => (
      <p key={idx}>{recipe.name}</p>
    ))}
  </p>);
}

export default Recipes;
