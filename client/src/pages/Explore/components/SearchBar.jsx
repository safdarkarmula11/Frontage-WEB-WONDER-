function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="mb-12">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dinosaurs..."
        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-5 py-4 text-white outline-none focus:border-green-500"
      />
    </div>
  );
}

export default SearchBar;