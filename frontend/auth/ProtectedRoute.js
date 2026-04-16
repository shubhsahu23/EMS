import { Children } from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute() {
    const token = localStorage.getItem('token');
    return token? Children:<Navigate to="/login" />
}
export default ProtectedRoute;