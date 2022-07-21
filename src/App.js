import { Routes, Route } from 'react-router-dom';
import Layout  from './components/layout/Layout';
import HerosPage from './components/superheros/HerosPage/HerosPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route
            path="/"
            element={
              
                <Layout />
             
            }>
        <Route index element={<HerosPage />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
