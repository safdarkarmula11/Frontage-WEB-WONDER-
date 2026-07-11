import { Navigate } from "react-router-dom";
import { getUser, getToken } from "../../services/authService";

/**
 * requireRole="admin" -> only admins allowed (used for /admin)
 * no requireRole -> any logged-in user allowed (used for /quiz)
 */
function ProtectedRoute({ children, requireRole }) {
  const token = getToken();
  const user = getUser();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (requireRole && user.role !== requireRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;