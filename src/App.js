import HerosPage from './components/HerosPage/HerosPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/test" element={<HerosPage />} />
      </Routes>
    </div>
  );
}

export default App;
