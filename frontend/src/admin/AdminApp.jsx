import React from 'react';
import AdminPage from './pages/AdminDashboard';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Menu from './components/Menu';
import AdminDashboard from './pages/AdminDashboard';
import AdminInquiry from './pages/AdminInquiry';
import AdminArchive from './pages/AdminArchive';
import AdminProfile from './pages/AdminProfile';
import AdminEvent from './pages/AdminEvent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path='AdminInquiry' element={<AdminInquiry />} />
      <Route path='AdminEvent' element={<AdminEvent />} />
      <Route path='Menu' element={<Menu />} />
      <Route path='Archive' element={<AdminArchive />} />
      <Route path='Settings' element={<AdminProfile />} />
      
    </Route>
  )
);

const AdminApp = () => {
  return <RouterProvider router={router} />;
};

export default AdminApp;
