import { useAppContext } from "../hooks/AppContext";

function CocktailForm() {
  const { search, changeSearch } = useAppContext();
  return (
    <div className="my-20 flex justify-center">
      <form className="flex max-w-xl bg-gray-50 p-5">
        <label
          htmlFor="search"
          className="text-xl font-medium text-green-600 sm:text-2xl"
        >
          Search Your Favorite Cocktail
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => changeSearch(e)}
            className="mt-1 w-full rounded border bg-gray-950 px-4 py-2 text-lg text-gray-50 sm:text-xl"
          />
        </label>
      </form>
    </div>
  );
}

export default CocktailForm;
