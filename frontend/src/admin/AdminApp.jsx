import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminInquiry from './pages/AdminInquiry';
import AdminArchive from './pages/AdminArchive';
import AdminProfile from './pages/AdminProfile';
import AdminEvent from './pages/AdminEvent';
import AdminMenu from './pages/AdminMenu';

// Layout
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path='AdminInquiry' element={<AdminInquiry />} />
      <Route path='AdminEvent' element={<AdminEvent />} />
      <Route path='Menu' element={<AdminMenu />} />
      <Route path='Archive' element={<AdminArchive />} />
      <Route path='Settings' element={<AdminProfile />} />
    </Route>
  )
);

const AdminApp = () => {
  return <RouterProvider router={router} />;
};

export default AdminApp;
