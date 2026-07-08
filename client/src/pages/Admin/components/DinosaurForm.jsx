import { useEffect, useState } from "react";

import {
  createDinosaur,
  updateDinosaur,
} from "../../../services/dinosaurService";

import { getAllEras } from "../../../services/eraService";

function DinosaurForm({ dinosaur, onClose }) {
  const token = localStorage.getItem("token");

  const [eras, setEras] = useState([]);

  const [form, setForm] = useState({
    eraId: "",
    name: "",
    scientificName: "",
    diet: "",
    height: "",
    length: "",
    weight: "",
    speed: "",
    habitat: "",
    image: null,
    model3d: "",
    model3dCreditName: "",
    model3dCreditUrl: "",
    model3dLicense: "CC-BY 4.0",
    description: "",
    isFeatured: false,
  });

  useEffect(() => {
    async function loadEras() {
      try {
        const data = await getAllEras();
        setEras(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadEras();

    if (dinosaur) {
      setForm({
        eraId: dinosaur.eraId,
        name: dinosaur.name,
        scientificName: dinosaur.scientificName,
        diet: dinosaur.diet,
        height: dinosaur.height,
        length: dinosaur.length,
        weight: dinosaur.weight,
        speed: dinosaur.speed,
        habitat: dinosaur.habitat,
        image: null,
        model3d: dinosaur.model3d || "",
        model3dCreditName: dinosaur.model3dCreditName || "",
        model3dCreditUrl: dinosaur.model3dCreditUrl || "",
        model3dLicense: dinosaur.model3dLicense || "CC-BY 4.0",
        description: dinosaur.description,
        isFeatured: dinosaur.isFeatured,
      });
    }
  }, [dinosaur]);

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("eraId", Number(form.eraId));
      formData.append("name", form.name);
      formData.append("scientificName", form.scientificName);
      formData.append("diet", form.diet);
      formData.append("height", form.height);
      formData.append("length", form.length);
      formData.append("weight", form.weight);
      formData.append("speed", form.speed);
      formData.append("habitat", form.habitat);
      formData.append("description", form.description);
      formData.append("isFeatured", form.isFeatured);
      formData.append("model3d", form.model3d);
      formData.append("model3dCreditName", form.model3dCreditName);
      formData.append("model3dCreditUrl", form.model3dCreditUrl);
      formData.append("model3dLicense", form.model3dLicense);

      if (form.image) {
        formData.append("image", form.image);
      }

      if (dinosaur) {
        await updateDinosaur(
          dinosaur.id,
          formData,
          token
        );
      } else {
        await createDinosaur(
          formData,
          token
        );
      }

      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <form
        onSubmit={handleSubmit}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-neutral-900 p-8"
      >
        <h2 className="mb-6 text-2xl font-bold text-white">
          {dinosaur ? "Edit Dinosaur" : "Add Dinosaur"}
        </h2>

        <div className="grid gap-4">

          <select
            name="eraId"
            value={form.eraId}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          >
            <option value="">Select Era</option>

            {eras.map((era) => (
              <option
                key={era.id}
                value={era.id}
              >
                {era.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="scientificName"
            placeholder="Scientific Name"
            value={form.scientificName}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="diet"
            placeholder="Diet"
            value={form.diet}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="height"
            placeholder="Height"
            value={form.height}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="length"
            placeholder="Length"
            value={form.length}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={form.weight}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="speed"
            placeholder="Speed"
            value={form.speed}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <input
            type="text"
            name="habitat"
            placeholder="Habitat"
            value={form.habitat}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <div>
            <label className="mb-2 block text-white">
              Dinosaur Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full rounded bg-neutral-800 p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-white">
              3D Model Filename (optional)
            </label>

            <input
              type="text"
              name="model3d"
              placeholder="e.g. t-rex.glb"
              value={form.model3d}
              onChange={handleChange}
              className="w-full rounded bg-neutral-800 p-3 text-white"
            />

            <p className="mt-1 text-xs text-neutral-500">
              File must exist in client/public/models/. Leave blank if no 3D
              model is available for this dinosaur.
            </p>
          </div>

          {form.model3d && (
            <div className="space-y-3 rounded-lg border border-neutral-800 p-4">
              <p className="text-sm font-semibold text-green-500">
                3D Model Credit
              </p>

              <input
                type="text"
                name="model3dCreditName"
                placeholder="Creator name (e.g. ChoochooLi Models)"
                value={form.model3dCreditName}
                onChange={handleChange}
                className="w-full rounded bg-neutral-800 p-3 text-white"
              />

              <input
                type="text"
                name="model3dCreditUrl"
                placeholder="Sketchfab model link"
                value={form.model3dCreditUrl}
                onChange={handleChange}
                className="w-full rounded bg-neutral-800 p-3 text-white"
              />

              <input
                type="text"
                name="model3dLicense"
                placeholder="License (e.g. CC-BY 4.0)"
                value={form.model3dLicense}
                onChange={handleChange}
                className="w-full rounded bg-neutral-800 p-3 text-white"
              />
            </div>
          )}

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="rounded bg-neutral-800 p-3 text-white"
            required
          />

          <label className="flex items-center gap-3 text-white">
            <input
              type="checkbox"
              name="isFeatured"
              checked={form.isFeatured}
              onChange={handleChange}
            />

            Featured Dinosaur
          </label>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="rounded bg-neutral-700 px-5 py-2 text-white hover:bg-neutral-600"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700"
          >
            {dinosaur ? "Update Dinosaur" : "Create Dinosaur"}
          </button>

        </div>
      </form>
    </div>
  );
}

export default DinosaurForm;