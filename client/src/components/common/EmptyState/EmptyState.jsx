function EmptyState({
  title = "Nothing Found",
  message = "No data available.",
}) {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 text-neutral-400">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;