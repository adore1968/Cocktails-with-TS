import { ChangeEvent } from "react";

export interface Cocktail {
  id: string;
  image: string;
  name: string;
  glass: string;
  alcoholic: string;
  category?: string;
  instructions?: string;
}

export type Cocktails = Cocktail[];

export interface CocktailResponse {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
  strGlass: string;
  strAlcoholic: string;
  strCategory?: string;
  strInstructions?: string;
}

export interface CocktailsResponse {
  drinks: CocktailResponse[];
}

export type ChangeSearchProps = ChangeEvent<HTMLInputElement>;

export interface AppProviderValue {
  cocktails: Cocktails;
  isLoading: boolean;
  search: string;
  changeSearch: ({ target }: ChangeSearchProps) => void;
}
