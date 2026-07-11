import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Loader from "../../components/common/Loader/Loader";
import ErrorState from "../../components/common/ErrorState/ErrorState";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import Button from "../../components/common/Button/Button";

import {
  getAllFossilFinds,
  submitFossilFind,
  deleteFossilFind,
} from "../../services/fossilService";
import { getAllDinosaurs } from "../../services/dinosaurService";
import { getToken, getUser, isAuthenticated } from "../../services/authService";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function FossilFinds() {
  const token = getToken();
  const user = getUser();
  const loggedIn = isAuthenticated();

  const [finds, setFinds] = useState([]);
  const [dinosaurs, setDinosaurs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    image: null,
    note: "",
    location: "",
    dinosaurId: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  async function loadFinds() {
    try {
      const data = await getAllFossilFinds();
      setFinds(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load fossil finds.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFinds();

    if (loggedIn) {
      getAllDinosaurs()
        .then(setDinosaurs)
        .catch((err) => console.error(err));
    }
  }, [loggedIn]);

  function handleChange(e) {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setFormError("");

    if (!form.image) {
      setFormError("Please choose a photo to upload.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("image", form.image);
      formData.append("note", form.note);

      if (form.location) formData.append("location", form.location);
      if (form.dinosaurId) formData.append("dinosaurId", form.dinosaurId);

      await submitFossilFind(formData, token);

      setForm({ image: null, note: "", location: "", dinosaurId: "" });
      setShowForm(false);

      loadFinds();
    } catch (err) {
      console.error(err);
      setFormError(err.message || "Failed to submit your find.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteFossilFind(id, token);
      loadFinds();
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) return <Loader />;

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          eyebrow="Community Discoveries"
          title="Fossil Finds"
          subtitle="Real discoveries logged by JurassicVerse explorers like you."
        />

        <div className="mb-12 text-center">
          {loggedIn ? (
            <Button onClick={() => setShowForm((prev) => !prev)}>
              {showForm ? "Cancel" : "Log a Fossil Find"}
            </Button>
          ) : (
            <p className="text-neutral-400">
              <a href="/login" className="text-green-500 hover:underline">
                Log in
              </a>{" "}
              to share your own fossil find.
            </p>
          )}
        </div>

        {showForm && (
          <motion.form
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="mx-auto mb-16 max-w-xl space-y-4 rounded-xl border border-neutral-800 bg-neutral-900 p-8"
          >
            {formError && <ErrorState message={formError} />}

            <div>
              <label className="mb-2 block text-white">Photo</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                className="w-full rounded bg-neutral-800 p-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Tell us about your find
              </label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={4}
                minLength={10}
                required
                placeholder="Where did you find it? What does it look like?"
                className="w-full rounded bg-neutral-800 p-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Location (optional)
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Ahmedabad, Gujarat"
                className="w-full rounded bg-neutral-800 p-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Looks like... (optional)
              </label>
              <select
                name="dinosaurId"
                value={form.dinosaurId}
                onChange={handleChange}
                className="w-full rounded bg-neutral-800 p-3 text-white"
              >
                <option value="">Not sure</option>
                {dinosaurs.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Find"}
            </Button>
          </motion.form>
        )}

        {error && <ErrorState message={error} />}

        {!error && finds.length === 0 && (
          <p className="text-center text-neutral-500">
            No fossil finds logged yet. Be the first!
          </p>
        )}

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={grid}
          initial="hidden"
          animate="show"
        >
          {finds.map((find) => (
            <motion.div
              key={find.id}
              variants={card}
              className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
            >
              <img
                src={`${import.meta.env.VITE_API_URL || "http://localhost:5000"}${find.image}`}
                alt="Fossil find"
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-neutral-300">{find.note}</p>

                {find.dinosaur && (
                  <p className="mt-2 text-xs font-semibold text-green-500">
                    Looks like: {find.dinosaur.name}
                  </p>
                )}

                {find.location && (
                  <p className="mt-1 text-xs text-neutral-500">
                    📍 {find.location}
                  </p>
                )}

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-neutral-500">
                    by {find.user.name}
                  </p>

                  {(user?.id === find.user.id || user?.role === "admin") && (
                    <button
                      onClick={() => handleDelete(find.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default FossilFinds;