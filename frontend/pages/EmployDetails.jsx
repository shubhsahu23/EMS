import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';
import Navbar from '../components/Navbar';

function EmployDetails() {
  const { id } = useParams();   
  const [emp, setEmp] = useState(null);
  console.log("ID:", id);
  useEffect(() => {
    API.get(`/employ/${id}`)
      .then(res => setEmp(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!emp) return <div className="app-shell"><Navbar /><div className="page-wrap"><p className="panel">Loading...</p></div></div>;

  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-wrap">
        <article className="panel space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Employee Profile</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{emp.fullname}</h1>
          <p className="text-slate-600">{emp.email}</p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Experience</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{emp.experience}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Completed</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{emp.completed}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Availability</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{emp.isOnProject ? "On Project" : "Available"}</p>
            </div>
          </div>

          <p className="pt-2 text-slate-700">{emp.description}</p>
        </article>
      </div>
    </div>
  );
}

export default EmployDetails;