import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import JobApplication from './pages/jobApplication/JobApplication';

import 'modern-normalize/modern-normalize.css';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ redirectPath, isAllowed, children }) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return children || <Outlet />;
};

export const App = () => {
  const { user, isLoading } = useAuth();

  return (
    <Routes>
      <Route element={<ProtectedRoute redirectPath="/" isAllowed={!user} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route
        path="/*"
        element={
          isLoading ? <></> : user ? <JobApplication /> : <LandingPage />
        }
      />
    </Routes>
  );
};
