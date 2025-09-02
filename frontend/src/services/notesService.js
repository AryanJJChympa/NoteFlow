import api from "../lib/axios";

// Fetch all notes
export const getNotes = async () => {
  const { data } = await api.get("/notes");
  return data;
};

// Get specific note
export const getNote = async (id) => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};

// Create new note
export const createNote = async (noteData) => {
  const { data } = await api.post("/notes/create", noteData);
  return data;
};

// Update note
export const updateNote = async (id, noteData) => {
  const { data } = await api.put(`/notes/${id}`, noteData);
  return data;
};

// Delete note
export const deleteNote = async (id) => {
  const { data } = await api.delete(`/notes/${id}`);
  return data;
};
