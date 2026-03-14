import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Events from '../pages/Events';
import About from '../pages/About';

/**
 * LandingRoutes.tsx
 * 
 * This file handles all routing logic for the landing page section.
 */
export default function LandingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      
      {/* 404 Fallback */}
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h1 className="text-9xl font-black text-indigo-200">404</h1>
            <p className="text-2xl font-bold text-slate-800 -mt-10">Page not found</p>
            <a href="/" className="inline-block mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold">Go Home</a>
          </div>
        </div>
      } />
    </Routes>
  );
}
