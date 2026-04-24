import React from 'react'
import Navbar from '../components/Navbar'
import API from '../api/axios'
import { useState,useEffect } from 'react'

function Dashboard() {
    const[data,setData] =useState(null)
    useEffect(()=>{
        API.get("/dashboard").then(res=>setData(res.data))
    },[])
    if(!data) return <div className="app-shell"><Navbar/><div className="page-wrap"><p className="panel">Loading...</p></div></div>

  return (
    <div className="app-shell">
      <Navbar/>
      <div className="page-wrap grid gap-6">
        <section className="panel space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Overview</p>
          <h2 className="text-3xl font-bold text-slate-900">Welcome, {data.fullname}</h2>
          <p className="text-slate-600">Signed in as {data.email}</p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <article className="panel">
            <p className="text-sm text-slate-500">Total Employees</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{data.total_employs}</p>
          </article>
          <article className="panel">
            <p className="text-sm text-slate-500">Account Status</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-700">Active</p>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Dashboard