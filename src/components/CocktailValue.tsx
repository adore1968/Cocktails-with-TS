import { Link } from "react-router-dom";
import { Cocktail } from "../shared/interfaces";

type Props = { cocktail: Cocktail };

function CocktailValue({ cocktail }: Props) {
  return (
    <div>
      <img src={cocktail.image} alt={cocktail.name} className="w-full" />
      <div className="flex flex-col gap-1 bg-white p-5">
        <h4 className="text-xl font-semibold sm:text-xl">{cocktail.name}</h4>
        <p className="text-lg text-gray-600 sm:text-xl">{cocktail.glass}</p>
        <p className="text-lg text-gray-400 sm:text-xl">{cocktail.alcoholic}</p>
        <Link
          to={`/cocktails/${cocktail.id}`}
          className="mt-1 w-fit rounded bg-green-600 p-2.5 text-lg uppercase text-gray-50 transition-colors hover:bg-green-500 sm:text-xl"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default CocktailValue;
