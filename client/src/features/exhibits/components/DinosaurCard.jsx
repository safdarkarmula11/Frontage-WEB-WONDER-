function DinosaurCard({ dinosaur }) {
  return (
    <div className="rounded-xl border border-stone-800 bg-stone-900 p-6">
      <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-stone-800">
        Image
      </div>

      <h3 className="text-2xl font-bold">
        {dinosaur.name}
      </h3>

      <p className="mt-2 text-gray-400">
        {dinosaur.description}
      </p>

      <span className="mt-4 inline-block rounded bg-emerald-600 px-3 py-1 text-sm">
        {dinosaur.diet}
      </span>
    </div>
  );
}

export default DinosaurCard;