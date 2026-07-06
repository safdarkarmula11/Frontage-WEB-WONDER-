function DeleteModal({
  dinosaur,
  onCancel,
  onConfirm,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-full max-w-md rounded-lg bg-neutral-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          Delete Dinosaur
        </h2>

        <p className="mt-5 text-neutral-300">
          Are you sure you want to delete
          <span className="font-semibold text-red-500">
            {" "}{dinosaur.name}
          </span>
          ?
        </p>

        <p className="mt-2 text-sm text-neutral-500">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="rounded-lg bg-neutral-700 px-5 py-2 text-white hover:bg-neutral-600"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;