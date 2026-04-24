import React from 'react'
import { useNavigate } from 'react-router-dom'

function EmployCard({emp,onDelete}) {
  const navigate=useNavigate()

  return (
    <div className="panel space-y-4">
      <div className="space-y-2">
        <h3
          className="cursor-pointer text-lg font-semibold text-slate-900 transition hover:text-teal-700"
          onClick={()=>navigate(`/employ/${emp.id}`)}
        >
          {emp.fullname}
        </h3>
        <p className="text-sm text-slate-600">{emp.email}</p>
        <p className="text-sm text-slate-600">{emp.experience} years of experience</p>
        <p className="text-sm text-slate-600">{emp.completed} projects completed</p>
        <p className="text-sm text-slate-600">{emp.description}</p>
        <p>
          <span className={`pill ${emp.isOnProject ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
            {emp.isOnProject ? 'On Project' : 'Not on Project'}
          </span>
        </p>
      </div>

      <div className="flex gap-2">
        <button className="btn-secondary" onClick={()=>navigate(`/edit/${emp.id}`)}>Edit</button>
        <button className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500" onClick={()=>onDelete(emp.id)}>Delete</button>
      </div>
    </div>
  )
}

export default EmployCard
