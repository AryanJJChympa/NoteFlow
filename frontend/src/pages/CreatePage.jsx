import { useState } from 'react'
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import toast from 'react-hot-toast';
import api from '../lib/axios';
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title && !content) {
      toast.error("Title and Content fields are empty");
      return;
    } else if (!title) {
      toast.error("Title field is empty");
    } else if (!content) {
      toast.error("Content field is empty");
    }
    setLoading(true);
    try {
      await api.post("/notes/create", {
        title,
        content
      })
      toast.success("Note Created Successfully!")
      navigate("/")
    } catch (error) {
      console.log("Error creating the note", error);
      if (error.response?.status === 429) {
        toast.error("Slow down Bud! You're making changes too fast", {
          duration: 4000,
          icon: "💀"
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }



  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            <span className='text-sm'>Back to Notes</span>
          </Link>

          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label className='py-2'>
                    <span className='label-text text-lg'>Title</span>
                  </label>
                  <input type="text"
                    placeholder='Note Title'
                    className='input input-bordered'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className='py-2'>
                    <span className='label-content text-lg'>Content</span>
                  </label>
                  <input type="text"
                    placeholder='Note Content'
                    className='input input-bordered'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-end">
                  <button type='submit' disabled={loading} className="btn btn-outline btn-primary text-lg">
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage