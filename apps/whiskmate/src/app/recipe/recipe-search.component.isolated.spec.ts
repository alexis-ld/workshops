import { of, Observable } from 'rxjs';
import { RecipeRepository } from './recipe-repository.service';
import { TestBed } from '@angular/core/testing';
import { RecipeSearchComponent } from './recipe-search.component';
import { Recipe } from './recipe';
import { first, pluck } from 'rxjs/operators';

describe(RecipeSearchComponent.name, () => {
  const papperdelle = { id: 'papperdelle-with-rose-harissa' } as Recipe;
  const puyLentil = { id: 'puy-lentil-and-aubergine-stew' } as Recipe;

  it('should search recipes without keyword on load', async () => {
    const { component, mockSearch } = createComponent();

    mockSearch.mockReturnValue(of([papperdelle, puyLentil]));

    expect(await firstValueFrom(component.items$)).toEqual([
      expect.objectContaining({ recipe: papperdelle }),
      expect.objectContaining({ recipe: puyLentil }),
    ]);

    expect(mockSearch).toBeCalledTimes(1);
    expect(mockSearch).toBeCalledWith({});
  });

  function createComponent() {
    const mockSearch = jest.fn() as jest.MockedFunction<
      typeof RecipeRepository.prototype.search
    >;

    TestBed.configureTestingModule({
      providers: [
        RecipeSearchComponent,
        {
          provide: RecipeRepository,
          useValue: {
            search: mockSearch,
          },
        },
      ],
    });

    return { component: TestBed.inject(RecipeSearchComponent), mockSearch };
  }
});

async function firstValueFrom<T>(source: Observable<T>): Promise<T> {
  return source.pipe(first()).toPromise();
}
