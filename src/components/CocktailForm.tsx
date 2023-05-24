import { useAppContext } from "../hooks/AppContext";

function CocktailForm() {
  const { search, changeSearch } = useAppContext();
  return (
    <div className="my-20 flex justify-center">
      <form className="flex min-w-fit max-w-xl flex-auto flex-col gap-2 rounded bg-white p-5 text-xl text-green-500 sm:text-2xl">
        Search Your Favorite Cocktail
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => changeSearch(e)}
          className="w-full border px-2 py-1.5 text-lg text-gray-600 sm:text-xl"
        />
      </form>
    </div>
  );
}

export default CocktailForm;
