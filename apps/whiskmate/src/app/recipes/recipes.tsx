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

  return (<div>
    {recipesLoaded && recipes.map(({ id, name, description, pictureUrl, ingredients  }) => (
      <div key={id}>
        <span style={{ color: 'red' }}>{name}</span>
        <img src={pictureUrl} alt="papapapa" />
        <p>{description}</p>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>);
}

export default Recipes;
