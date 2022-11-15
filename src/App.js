import './App.css';
import First from './First';
import Navbar from './Navbar';
import {
  Routes, Route,
} from 'react-router-dom';
import Second from './Second';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Second />} />
        <Route path='/sec' element={<First />} />
      </Routes>
    </>
  );
}

export default App;
