export interface Recipe {
  id: string;
  name: string;
  description: string
  pictureUrl: string
  steps: string[]
  ingredients: string[]
  fav?: boolean
}
