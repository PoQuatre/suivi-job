import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import JobApplicationList from './components/jobApplicationList/jobApplicationList';
export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/list" element={<JobApplicationList />} />
    </Routes>
  );
};
