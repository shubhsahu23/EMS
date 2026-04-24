import { Link } from "react-router-dom";
import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="border-b border-white/60 bg-white/80 backdrop-blur">
            <div className="page-wrap flex items-center justify-between gap-4 py-4">
                <div>
                    <h1 className="text-lg font-bold tracking-tight text-slate-900">EMS Portal</h1>
                    <p className="text-xs text-slate-500">Employee Management System</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Link className="btn-secondary" to="/dashboard">Dashboard</Link>
                    <Link className="btn-secondary" to="/employs">Employees</Link>
                    <Link className="btn-secondary" to="/create">Add Employee</Link>
                    <button className="btn-primary" type="button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;