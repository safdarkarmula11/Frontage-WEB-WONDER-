import { useState } from "react";

import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import DinosaurGrid from "./components/DinosaurGrid";

function Explore() {
  const [search, setSearch] = useState("");
  const [era, setEra] = useState("All");
  const [diet, setDiet] = useState("All");

  return (
    <main className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-5xl font-bold text-white">
          Explore Dinosaurs
        </h1>

        <p className="mb-10 text-gray-400">
          Search and discover prehistoric species.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="my-8">
          <FilterBar
            era={era}
            setEra={setEra}
            diet={diet}
            setDiet={setDiet}
          />
        </div>

        <DinosaurGrid
          search={search}
          era={era}
          diet={diet}
        />
      </div>
    </main>
  );
}

export default Explore;