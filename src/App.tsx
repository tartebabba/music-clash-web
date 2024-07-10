import './App.css';
import { Route, Routes } from 'react-router-dom';
import Connections from './components/Connections';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="flex h-dvh flex-col justify-between">
        <NavigationBar />
        <Routes>
          <Route path="/connections" element={<Connections />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
