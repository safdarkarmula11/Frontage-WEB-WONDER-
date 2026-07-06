function EraBadge({ era }) {
  return (
    <span className="inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
      {era}
    </span>
  );
}

export default EraBadge;