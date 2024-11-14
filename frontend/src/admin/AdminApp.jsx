import React from 'react';
import AdminPage from './pages/AdminPage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Inquiry from './components/Inquiry';
import Menu from './components/Menu';
import Event from './components/Event';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AdminPage />} />
      <Route path='/Inquiry' element={<Inquiry />} />
      <Route path='/Events' element={<Event />} />
      <Route path='/Menu' element={<Menu />} />
      
    </Route>
  )
);

const AdminApp = () => {
  return <RouterProvider router={router} />;
};

export default AdminApp;
