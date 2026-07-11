import { useEffect, useState } from "react";

import { createEra, updateEra } from "../../../services/eraService";

function EraForm({ era, onClose }) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const [form, setForm] = useState({
    name: "",
    slug: "",
    duration: "",
    climate: "",
    description: "",
    bannerImage: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (era) {
      setForm({
        name: era.name || "",
        slug: era.slug || "",
        duration: era.duration || "",
        climate: era.climate || "",
        description: era.description || "",
        bannerImage: era.bannerImage || "",
      });
    }
  }, [era]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleNameChange(e) {
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      name: value,
      slug: era
        ? prev.slug
        : value
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSubmitting(true);

    try {
      const data = {
        ...form,
        bannerImage: form.bannerImage || undefined,
      };

      if (era) {
        await updateEra(era.id, data, token);
      } else {
        await createEra(data, token);
      }

      onClose();
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to save era.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-neutral-900 p-8">
        <h2 className="text-2xl font-bold text-white">
          {era ? "Edit Era" : "Add Era"}
        </h2>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-neutral-400">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleNameChange}
              required
              minLength={2}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-neutral-400">
              Slug
            </label>
            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white outline-none focus:border-green-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-neutral-400">
                Duration
              </label>
              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                required
                placeholder="e.g. 201-145 MYA"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-neutral-400">
                Climate
              </label>
              <input
                name="climate"
                value={form.climate}
                onChange={handleChange}
                required
                placeholder="e.g. Warm and humid"
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-neutral-400">
              Banner Image URL (optional)
            </label>
            <input
              name="bannerImage"
              value={form.bannerImage}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-neutral-400">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              minLength={10}
              rows={4}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-white outline-none focus:border-green-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-neutral-700 px-5 py-2 text-white hover:bg-neutral-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
            >
              {submitting ? "Saving..." : era ? "Save Changes" : "Create Era"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EraForm;