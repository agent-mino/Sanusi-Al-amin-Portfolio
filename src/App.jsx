import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Threshold from './pages/Threshold';
import DevWorld from './pages/DevWorld';
import CreativeWorld from './pages/CreativeWorld';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Threshold />} />
        <Route path="/dev" element={<DevWorld />} />
        <Route path="/world" element={<CreativeWorld />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
