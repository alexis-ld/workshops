import { GreetingsClient, GreetingsClientProvider } from './greetings.client';
import { GreetingsResponseDto } from '@whiskmate/shared';
import React, { ReactNode } from 'react';

/**
 * Always returns a single greeting "Welcome!"
 */
export class GreetingsClientFake implements GreetingsClient {
  async getGreetings(): Promise<GreetingsResponseDto> {
    return {
      items: [
        {
          id: '1',
          description: 'Can I get some burger, with some peanut butter',
          name: 'Burger',
          ingredients: [
            'Pain burger',
          ],
          pictureUrl: 'https://cdn-www.konbini.com/files/2022/12/jones-burger-feat.jpg',
          steps: [],
        },
      ],
    };
  }
}

export function WithGreetingsClientFake({ children }: { children: ReactNode }) {
  return (
    <GreetingsClientProvider.Provider value={new GreetingsClientFake()}>
      {children}
    </GreetingsClientProvider.Provider>
  );
}
