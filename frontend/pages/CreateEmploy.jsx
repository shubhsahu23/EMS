import { useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function CreateEmploy() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    isOnProject: false,
    experience: 0,
    completed: 0,
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/employ", form);
    alert("Created");
  };

  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-wrap">
        <form className="panel space-y-4" onSubmit={handleSubmit}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">New Employee</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create Employee Record</h2>
          </div>

          <input className="field" placeholder="Name" value={form.fullname} onChange={(e) => setForm({ ...form, fullname: e.target.value })} />
          <input className="field" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

          <div className="grid gap-4 sm:grid-cols-2">
            <input className="field" type="number" placeholder="Experience" value={form.experience} onChange={(e) => setForm({ ...form, experience: +e.target.value })} />
            <input className="field" type="number" placeholder="Completed" value={form.completed} onChange={(e) => setForm({ ...form, completed: +e.target.value })} />
          </div>

          <textarea className="field min-h-28" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />

          <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <input type="checkbox" checked={form.isOnProject} onChange={(e) => setForm({ ...form, isOnProject: e.target.checked })} />
            On Project
          </label>

          <button className="btn-primary" type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
export default CreateEmploy;