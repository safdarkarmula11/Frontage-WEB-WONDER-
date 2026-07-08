function DinosaurHero({ dinosaur }) {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        <img
          src={
            dinosaur.image.startsWith("http")
              ? dinosaur.image
              : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${dinosaur.image}`
          }
          alt={dinosaur.name}
          className="h-[500px] w-full rounded-xl object-cover"
        />

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