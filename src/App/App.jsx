import { BrowserRouter, Outlet } from 'react-router-dom';
import { MainRoutes } from '../routes/index';
import { Header } from '../components/Header/Hearder'; 

import './App.css';

export function App() {

  return (
    <BrowserRouter>
        <main className="App">
          <Header />
          <Outlet />
          <MainRoutes />
        </main>
    </BrowserRouter>
  )
}