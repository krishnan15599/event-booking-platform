import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingRoutes from './routes/LandingRoutes';
import AdminRoutes from './routes/AdminRoutes';
import './App.css';

/**
 * App.tsx
 * 
 * Central Router:
 * Connects the two separate modules (Landing and Admin) independently.
 */
function App() {
  return (
    <Router>
      <div className="app-main">
        <Routes>
          {/* Admin Section: URLs starting with /admin */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* Landing Section: Everything else */}
          <Route path="/*" element={<LandingRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
