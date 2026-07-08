import { Suspense, useState } from "react";

import Dinosaur3D from "../../../components/three/Dinosaur3D";

function DinosaurHero({ dinosaur }) {
  const has3D = Boolean(dinosaur.model3d);

  const [view, setView] = useState("photo");

  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        <div>
          <div className="mb-4 flex gap-2">
            <button
              onClick={() => setView("photo")}
              className={
                view === "photo"
                  ? "rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-neutral-300 hover:bg-neutral-700"
              }
            >
              Photo
            </button>

            <button
              onClick={() => has3D && setView("3d")}
              disabled={!has3D}
              title={
                has3D
                  ? "View interactive 3D model"
                  : "No 3D model available for this dinosaur yet"
              }
              className={
                !has3D
                  ? "cursor-not-allowed rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-600"
                  : view === "3d"
                  ? "rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-neutral-300 hover:bg-neutral-700"
              }
            >
              3D View {!has3D && "(unavailable)"}
            </button>
          </div>

          {view === "photo" ? (
            <img
              src={
                dinosaur.image.startsWith("http")
                  ? dinosaur.image
                  : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${dinosaur.image}`
              }
              alt={dinosaur.name}
              className="h-[500px] w-full rounded-xl object-cover"
            />
          ) : (
            <div className="h-[500px] w-full overflow-hidden rounded-xl bg-neutral-900">
              <Suspense fallback={null}>
                <Dinosaur3D modelPath={`/models/${dinosaur.model3d}`} />
              </Suspense>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center">

          <p className="mb-3 text-green-500">
            {dinosaur.era?.name}
          </p>

          <h1 className="text-5xl font-black text-white">
            {dinosaur.name}
          </h1>

          <h2 className="mt-3 text-2xl italic text-neutral-400">
            {dinosaur.scientificName}
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-300">
            {dinosaur.description}
          </p>

        </div>

      </div>
    </section>
  );
}

export default DinosaurHero;