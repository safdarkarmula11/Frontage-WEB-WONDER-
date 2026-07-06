import { Navigate } from "react-router-dom";
import { getUser, getToken } from "../../services/authService";

function ProtectedRoute({ children }) {
  const token = getToken();
  const user = getUser();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;