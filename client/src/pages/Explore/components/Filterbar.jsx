function FilterBar({ era, setEra, diet, setDiet }) {
  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={era}
        onChange={(e) => setEra(e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 p-3 text-white"
      >
        <option>All</option>
        <option>Triassic</option>
        <option>Jurassic</option>
        <option>Cretaceous</option>
      </select>

      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
        className="rounded-lg border border-neutral-700 bg-neutral-900 p-3 text-white"
      >
        <option>All</option>
        <option>Carnivore</option>
        <option>Herbivore</option>
        <option>Omnivore</option>
      </select>
    </div>
  );
}

export default FilterBar;