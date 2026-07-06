function DinosaurInfo({ dinosaur }) {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-8 text-4xl font-bold text-white">
          About {dinosaur.name}
        </h2>

        <div className="space-y-6 text-lg leading-8 text-neutral-300">

          <p>
            <strong className="text-white">Habitat:</strong>{" "}
            {dinosaur.habitat}
          </p>

          <p>
            <strong className="text-white">Diet:</strong>{" "}
            {dinosaur.diet}
          </p>

          <p>{dinosaur.description}</p>

        </div>

      </div>
    </section>
  );
}

export default DinosaurInfo;