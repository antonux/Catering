import React from 'react';
import AdminPage from './pages/AdminDashboard';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Menu from './components/Menu';
import Event from './components/Event';
import AdminDashboard from './pages/AdminDashboard';
import AdminInquiry from './pages/AdminInquiry';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path='AdminInquiry' element={<AdminInquiry />} />
      <Route path='Events' element={<Event />} />
      <Route path='Menu' element={<Menu />} />
      
    </Route>
  )
);

const AdminApp = () => {
  return <RouterProvider router={router} />;
};

export default AdminApp;
