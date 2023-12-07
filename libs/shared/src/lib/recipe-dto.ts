export interface RecipeDto {
  id: string;
  name: string;
  description: string
  pictureUrl: string
  steps: string[]
  ingredients: string[]
}

export interface RecipesResponseDto {
  items: RecipeDto[];
}
