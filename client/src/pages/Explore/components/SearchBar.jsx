import { motion } from "framer-motion";

function SearchBar({ value, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative mb-12"
    >
      <svg
        className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, diet, or era..."
        className="w-full rounded-xl border border-neutral-800 bg-neutral-900 py-4 pl-14 pr-5 text-white outline-none transition-colors focus:border-green-500"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-neutral-500 hover:text-white"
        >
          Clear
        </button>
      )}
    </motion.div>
  );
}

export default SearchBar;