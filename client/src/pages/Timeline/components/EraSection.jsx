function EraSection({ id, title, years, description }) {
  return (
    <section
      id={id}
      className="border-b border-neutral-800 bg-neutral-950 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-green-400">
          {years}
        </p>

        <h2 className="mb-6 text-5xl font-bold text-white">
          {title}
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-gray-300">
          {description}
        </p>
      </div>
    </section>
  );
}

export default EraSection;