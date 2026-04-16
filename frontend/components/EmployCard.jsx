import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function EmployCard({emp,onDelete}) {
    const navigate=useNavigate()
  return (
    <div>
        <h3 onClick={()=>navigate(`/employ/${emp.id}`)}>{emp.fullname}</h3>
        <p>{emp.email}</p>
        <p>{emp.isOnProject ? 'On Project' : 'Not on Project'}</p>
        <button onClick={()=>navigate(`/edit/${emp.id}`)}>Edit</button>
        <button onClick={()=>onDelete(emp.id)}>Delete</button>
    </div>
  )
}

export default EmployCard
