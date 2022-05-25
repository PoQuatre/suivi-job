import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import JobApplication from './pages/jobApplication/JobApplication';

import 'modern-normalize/modern-normalize.css';
import { UserContextProvider } from './hooks/useUserContext';

export const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-application/*" element={<JobApplication />} />
      </Routes>
    </UserContextProvider>
  );
};
