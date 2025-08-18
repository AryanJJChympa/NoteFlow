import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react"
import api from "../lib/axios"

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error is fetching note", error);
        toast.error("Failed to fetch note!");
      } finally {
        setLoading(false);
      }
    }
    fetchNote();
  }, [id])

  console.log({ note });

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note Deleted!");
      navigate("/")
    } catch (error) {
      console.log("Error deleting the note", error);
      toast.error("Failed to delete note");

    }
  }

  const handleSave = async () => {
    if (!note.title && !note.content) {
      toast.error("Title and Content fields are empty");
      return;
    } else if (!note.title) {
      toast.error("Title field is empty");
      return;
    } else if (!note.content) {
      toast.error("Content field is empty");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/")
    } catch (error) {
      console.log("Error saving the note", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10' />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>

        <div className='max-w-2xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>
            <Link to={"/"} className='btn btn-ghost'>
              <ArrowLeftIcon className='size-5' />
              <span className='text-sm'>Back to Notes</span>
            </Link>
            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <Trash2Icon className='h-5 w-5' />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className='card-body'>
              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text text-lg'>Title</span>
                </label>
                <input
                  type="text"
                  placeholder='Note Title'
                  className='input input-bordered'
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text text-lg'>Content</span>
                </label>
                <textarea
                  placeholder='Write down note here...'
                  className='textarea textarea-bordered h-32'
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button type='submit' onClick={handleSave} disabled={saving} className="btn btn-outline btn-primary text-lg">
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage