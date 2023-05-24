import { useState, useEffect } from "react";
import { AppContext } from "../hooks/AppContext";
import {
  CocktailResponse,
  Cocktails,
  CocktailsResponse,
} from "../shared/interfaces";
import { ChangeSearchProps } from "../shared/interfaces";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

type Props = { children: JSX.Element };

export function AppProvider({ children }: Props) {
  const [cocktails, setCocktails] = useState<Cocktails>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchCocktails = async (): Promise<CocktailsResponse> => {
      return fetch(`${url}${search}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
    };

    const getProps = (apiResponse: CocktailResponse[]): Cocktails => {
      return apiResponse.map((value) => {
        const {
          idDrink: id,
          strDrinkThumb: image,
          strDrink: name,
          strGlass: glass,
          strAlcoholic: alcoholic,
        } = value;
        return { id, image, name, glass, alcoholic };
      });
    };

    fetchCocktails()
      .then((d) => {
        const { drinks } = d;
        if (drinks) {
          const newCocktails = getProps(drinks);
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [search]);

  const changeSearch = ({ target }: ChangeSearchProps) => {
    setSearch(target.value);
  };

  return (
    <AppContext.Provider value={{ cocktails, isLoading, search, changeSearch }}>
      {children}
    </AppContext.Provider>
  );
}
