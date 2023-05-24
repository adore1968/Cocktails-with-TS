import { Link } from "react-router-dom";

function Error404Route() {
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center gap-5 text-center">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Error 404: Page Not Found
      </h1>
      <Link
        to="/"
        className="rounded bg-green-600 p-2.5 text-lg text-white transition-colors hover:bg-green-500 sm:text-xl"
      >
        Go Back
      </Link>
    </div>
  );
}

export default Error404Route;
