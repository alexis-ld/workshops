export interface RecipeDto {
  id: string;
  name: string;
  description: string
  pictureUrl: string
  steps: string[]
  ingredients: string[]
  fav?: boolean
}

export interface RecipesResponseDto {
  items: RecipeDto[];
}
