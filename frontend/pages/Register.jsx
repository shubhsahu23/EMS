import React from 'react'
import { useState } from 'react'
import  { register} from '../auth/auth'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const [form,setForm]=useState({fullname:"",email:"",password:""})
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setError('')
      await register(form)
      navigate('/login')
    } catch (err) {
      console.error('Registration failed:', err)
      setError('Unable to register. Check your details and try again.')
    }
  }


  return (
    <div className="app-shell flex items-center justify-center px-4 py-10">
      <div className="panel w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Create account</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Join EMS</h2>
          <p className="text-sm text-slate-500">Set up your profile and start managing your team.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input className="field" type="text" placeholder='Full Name' value={form.fullname} onChange={e=>setForm({...form,fullname:e.target.value})} />
          <input className="field" type="text" placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          <input className="field" type="password" placeholder='Password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>

          {error && <p className="text-sm font-medium text-rose-600">{error}</p>}

          <button className="btn-primary w-full">Register</button>
        </form>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link className="font-semibold text-teal-700 hover:text-teal-600" to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register