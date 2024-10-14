import { useIsAuthenticated } from "@/components/hooks/useAuth";
import { Navigate } from "react-router-dom";

// Guard to protect routes from unauthenticated access
export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!useIsAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Guard to redirect authenticated users away from auth routes (login, signup)
export const AuthRoute = ({ children }: { children: JSX.Element }) => {
  if (useIsAuthenticated()) {
    return <Navigate to="/main" replace />;
  }
  return children;
};
