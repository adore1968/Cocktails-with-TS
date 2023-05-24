import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeRoute from "./routes/HomeRoute";
import AboutRoute from "./routes/AboutRoute";
import Error404Route from "./routes/Error404Route";
import SingleCocktailRoute from "./routes/SingleCocktailRoute";

function App() {
  return (
    <div className="app min-h-screen">
      <main>
        <Navbar />
        <section className="px-6 pb-6">
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/about" element={<AboutRoute />} />
            <Route path="*" element={<Error404Route />} />
            <Route path="/cocktails/:id" element={<SingleCocktailRoute />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
