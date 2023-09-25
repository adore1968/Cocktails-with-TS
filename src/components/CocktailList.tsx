import { useAppContext } from "../hooks/AppContext";
import Loading from "./Loading";
import CocktailValue from "./CocktailValue";

function CocktailList() {
  const { cocktails, isLoading } = useAppContext();

  if (isLoading) return <Loading />;

  if (cocktails.length < 1) {
    return (
      <div className="text-center text-3xl font-bold text-white sm:text-4xl">
        <h1>No Cocktails Matched Your Search Criteria</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="mb-10 text-center text-3xl font-bold text-gray-50 sm:text-4xl">
        Cocktails
      </h1>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3">
        {cocktails.map((cocktail) => (
          <CocktailValue key={cocktail.id} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}

export default CocktailList;
