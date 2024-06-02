import './App.css';
import { Route, Routes } from 'react-router-dom';
import Connections from './components/Connections';
import Home from './components/Home';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/connections" element={<Connections />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
