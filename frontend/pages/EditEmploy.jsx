import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api/axios';
import Navbar from '../components/Navbar';

function EditEmploy() {
  const { id } = useParams();   // correct extraction
  const navigate = useNavigate();

  // initialized structure to avoid null crash
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    experience: 0,
    completed: 0,
    description: "",
    isOnProject: false
  });

  const [loading, setLoading] = useState(true);

  // fetch employee data
  useEffect(() => {
    API.get(`/employ/${id}`)
      .then(res => {
        setForm(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/employ/${id}`, form);
      navigate('/employs');
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  
  if (loading) return <p>Loading...</p>;

  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-wrap">
      <form className="panel space-y-4" onSubmit={handleSubmit}>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Edit Employee</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Update Employee Record</h2>
        </div>

        <input
          className="field"
          type="text"
          placeholder="Full Name"
          value={form.fullname}
          onChange={e =>
            setForm({ ...form, fullname: e.target.value })
          }
        />

        <input
          className="field"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            className="field"
            type="number"
            placeholder="Experience"
            value={form.experience}
            onChange={e =>
              setForm({ ...form, experience: Number(e.target.value) })
            }
          />

          <input
            className="field"
            type="number"
            placeholder="Completed Projects"
            value={form.completed}
            onChange={e =>
              setForm({ ...form, completed: Number(e.target.value) })
            }
          />
        </div>

        <textarea
          className="field min-h-28"
          placeholder="Description"
          value={form.description}
          onChange={e =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={form.isOnProject}
            onChange={e =>
              setForm({ ...form, isOnProject: e.target.checked })
            }
          />
          On Project
        </label>

        <button className="btn-primary" type="submit">Update</button>
      </form>
      </div>
    </div>
  );
}

export default EditEmploy;