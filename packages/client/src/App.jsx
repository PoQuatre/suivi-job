import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Formulaire from './component/creationForm/CreationForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/formulaire" element={<Formulaire />} />
    </Routes>
  );
};
