import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './hooks/useAuth';

const root = document.getElementById('root');
if (root) {
  ReactDOM.hydrateRoot(
    root,
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>,
  );
} else {
  console.error('There is no #root element in the dom!');
}
