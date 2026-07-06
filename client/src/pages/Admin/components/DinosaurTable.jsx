import { useEffect, useState } from "react";

import {
  getAllDinosaurs,
  deleteDinosaur,
} from "../../../services/dinosaurService";

import DinosaurForm from "./DinosaurForm";
import DeleteModal from "./DeleteModal";

function DinosaurTable() {
  const [dinosaurs, setDinosaurs] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [selected, setSelected] = useState(null);

  async function loadDinosaurs() {
    try {
      const data = await getAllDinosaurs();
      setDinosaurs(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadDinosaurs();
  }, []);

  async function handleDelete() {
    try {
      const token = localStorage.getItem("token");

      await deleteDinosaur(selected.id, token);

      setShowDelete(false);
      setSelected(null);

      loadDinosaurs();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Dinosaurs
        </h2>

        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
        >
          Add Dinosaur
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-neutral-800">
        <table className="w-full bg-neutral-900">
          <thead>
            <tr className="border-b border-neutral-700 bg-neutral-800">
              <th className="p-4 text-left">Name</th>
              <th className="text-left">Era</th>
              <th className="text-left">Diet</th>
              <th className="text-left">Featured</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dinosaurs.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="p-8 text-center text-neutral-400"
                >
                  No dinosaurs found.
                </td>
              </tr>
            ) : (
              dinosaurs.map((dinosaur) => (
                <tr
                  key={dinosaur.id}
                  className="border-b border-neutral-800"
                >
                  <td className="p-4 text-white">
                    {dinosaur.name}
                  </td>

                  <td className="text-neutral-300">
                    {dinosaur.era?.name}
                  </td>

                  <td className="text-neutral-300">
                    {dinosaur.diet}
                  </td>

                  <td className="text-neutral-300">
                    {dinosaur.isFeatured ? "Yes" : "No"}
                  </td>

                  <td className="space-x-2 text-center">
                    <button
                      onClick={() => {
                        setEditing(dinosaur);
                        setShowForm(true);
                      }}
                      className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        setSelected(dinosaur);
                        setShowDelete(true);
                      }}
                      className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <DinosaurForm
          dinosaur={editing}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
            loadDinosaurs();
          }}
        />
      )}

      {showDelete && selected && (
        <DeleteModal
          dinosaur={selected}
          onCancel={() => {
            setShowDelete(false);
            setSelected(null);
          }}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}

export default DinosaurTable;