import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployCard from "../components/EmployCard";
import API from "../api/axios";

function Employs() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/employs");
      setData(res.data);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete?")) return;

    try {
      await API.delete(`/employ/${id}`);
      setData(prev => prev.filter(emp => emp.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="app-shell">
      <Navbar />
      <div className="page-wrap space-y-6">
        <div className="panel flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Team</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Employees</h2>
          </div>
          <Link className="btn-primary" to="/create">Add Employee</Link>
        </div>

      {data.length === 0 ? (
        <p className="panel text-slate-600">No Employees Found</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
        {data.map(emp => (
          <EmployCard
            key={emp.id}
            emp={emp}
            onDelete={handleDelete}
          />
        ))
        }
        </div>
      )}
      </div>
    </div>
  );
}

export default Employs;