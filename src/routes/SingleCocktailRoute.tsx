import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Cocktail,
  CocktailResponse,
  CocktailsResponse,
} from "../shared/interfaces";
import Loading from "../components/Loading";
import SingleCocktail from "../components/SingleCocktail";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktailRoute() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCocktail = async (): Promise<CocktailsResponse> => {
      return fetch(`${url}${id}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
    };

    const getProps = (apiResponse: CocktailResponse): Cocktail => {
      const {
        idDrink: id,
        strDrinkThumb: image,
        strDrink: name,
        strGlass: glass,
        strAlcoholic: alcoholic,
        strCategory: category,
        strInstructions: instructions,
      } = apiResponse;

      return { id, image, name, glass, alcoholic, category, instructions };
    };

    fetchCocktail()
      .then((data) => {
        const { drinks } = data;
        const newCocktail = getProps(drinks[0]);
        setCocktail(newCocktail);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading)
    return (
      <div className="mt-20">
        <Loading />
      </div>
    );

  return (
    <div className="mt-20">
      {cocktail && <SingleCocktail cocktail={cocktail} />}
    </div>
  );
}

export default SingleCocktailRoute;
