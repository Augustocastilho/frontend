import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import InitialScreen from './pages/Initial';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<InitialScreen />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
