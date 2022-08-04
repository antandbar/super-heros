import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HerosPage from './components/superheros/HerosPage/HerosPage';
import HeroPage from './components/superheros/HeroPage/HeroPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/superheros" element={<Layout />}>
          <Route index element={<HerosPage />} />
          <Route path=":name" element={<HeroPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/superheros" />} />
      </Routes>
    </div>
  );
}

export default App;
