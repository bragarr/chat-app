import { BrowserRouter, Outlet } from 'react-router-dom';
import { MainRoutes } from '../routes/index';
import { Header } from '../components/Header/Hearder'; 
import { AuthProvider } from '../contexts/auth';

import './App.css';

export function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
          <div className="App">
            <Header />
            <Outlet />
            <MainRoutes />
          </div>
      </BrowserRouter>
    </AuthProvider>
  )
}