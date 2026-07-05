function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search dinosaurs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-lg border border-neutral-700 bg-neutral-900 p-3 text-white outline-none focus:border-green-500"
    />
  );
}

export default SearchBar;