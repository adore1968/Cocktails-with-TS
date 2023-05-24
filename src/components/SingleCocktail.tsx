import { Link } from "react-router-dom";
import { Cocktail } from "../shared/interfaces";

type Props = { cocktail: Cocktail };

function SingleCocktail({ cocktail }: Props) {
  const mapProps = [
    {
      type: "Name",
      content: cocktail.name,
    },
    {
      type: "Category",
      content: cocktail.category,
    },
    {
      type: "Info",
      content: cocktail.alcoholic,
    },
    {
      type: "Glass",
      content: cocktail.glass,
    },
    {
      type: "Instructions",
      content: cocktail.instructions,
    },
  ];

  return (
    <div className="container mx-auto pb-20">
      <div className="flex flex-col items-center gap-5 text-center">
        <Link
          to="/"
          className="rounded bg-green-600 p-2.5 text-lg text-white transition-colors hover:bg-green-500 sm:text-xl"
        >
          Back Home
        </Link>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {cocktail.name}
        </h1>
      </div>
      <div className="mt-20 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
        <img src={cocktail.image} alt={cocktail.name} />
        <div className="flex flex-col gap-5">
          {mapProps.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 text-lg text-white sm:text-xl"
            >
              <h4 className="rounded bg-green-600 px-2 py-1">{value.type}:</h4>
              <p>{value.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleCocktail;
