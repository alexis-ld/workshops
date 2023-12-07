export interface GreetingDto {
  id: string;
  name: string;
  description: string
  pictureUrl: string
  steps: string[]
  ingredients: string[]
}

export interface GreetingsResponseDto {
  items: GreetingDto[];
}
