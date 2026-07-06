function ExhibitCard({ dinosaur }) {
  return (
    <div className="overflow-hidden rounded-xl border border-stone-800 bg-stone-900 transition hover:-translate-y-2 hover:border-emerald-500">
      <div className="flex h-56 items-center justify-center bg-stone-800">
        <span className="text-gray-400">Image Coming Soon</span>
      </div>

      <div className="space-y-2 p-5">
        <h3 className="text-xl font-bold text-white">
          {dinosaur.name}
        </h3>

        <p className="text-gray-400">
          Era: {dinosaur.era}
        </p>

        <p className="text-gray-400">
          Diet: {dinosaur.diet}
        </p>

        <button className="mt-4 w-full rounded-lg bg-emerald-600 py-2 font-medium hover:bg-emerald-700">
          View Exhibit
        </button>
      </div>
    </div>
  );
}

export default ExhibitCard;