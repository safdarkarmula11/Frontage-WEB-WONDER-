function ErrorState({
  message = "Something went wrong.",
}) {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold text-red-500">
        Error
      </h2>

      <p className="mt-4 text-neutral-300">
        {message}
      </p>
    </div>
  );
}

export default ErrorState;