import React, { useState } from 'react';
import { login } from '../auth/auth';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await login(form);
      navigate('/dashboard');
    } catch (err) {
      console.error("Login failed:", err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="app-shell flex items-center justify-center px-4 py-10">
      <div className="panel w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Welcome back</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Sign in to EMS</h2>
          <p className="text-sm text-slate-500">Manage employees, projects, and performance.</p>
        </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="field"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="field"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="text-sm font-medium text-rose-600">{error}</p>}

        <button className="btn-primary w-full" type="submit">Login</button>
      </form>

      <p className="text-center text-sm text-slate-600">
        Don&apos;t have an account?{' '}
        <Link className="font-semibold text-teal-700 hover:text-teal-600" to="/register">Register here</Link>
      </p>

      <button className="btn-secondary w-full" onClick={() => navigate('/register')}>
        Go to Register
      </button>
      </div>
    </div>
  );
}

export default Login;