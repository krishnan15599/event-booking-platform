import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../admin/AdminDashboard';

/**
 * AdminRoutes.tsx
 * 
 * This file handles all routing logic for the Admin CRM section.
 * It is completely separate from the Landing routes.
 */
export default function AdminRoutes() {
  return (
    <Routes>
      {/* Handles /admin */}
      <Route index element={<AdminDashboard />} />
      
      {/* Add more admin specific routes here */}
      {/* Example: <Route path="users" element={<Users />} /> */}
    </Routes>
  );
}
