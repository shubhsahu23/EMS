import { Link } from "react-router-dom";
import { logout } from "../auth/auth";
function Navbar() {
    <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/create">Add Employee</Link>
        <Link to={logout}>Logout</Link>
    </nav>
}

export default Navbar;