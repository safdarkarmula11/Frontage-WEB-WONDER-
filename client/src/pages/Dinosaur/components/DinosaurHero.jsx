function DinosaurHero() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row">
        <img
          src="https://placehold.co/600x400"
          alt="Tyrannosaurus Rex"
          className="w-full max-w-xl rounded-2xl"
        />

        <div>
          <p className="mb-2 text-green-400">
            Late Cretaceous
          </p>

          <h1 className="mb-4 text-6xl font-bold text-white">
            Tyrannosaurus Rex
          </h1>

          <p className="italic text-gray-400">
            Tyrannosaurus rex
          </p>
        </div>
      </div>
    </section>
  );
}

export default DinosaurHero;