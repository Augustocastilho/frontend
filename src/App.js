import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import InitialScreen from './pages/Initial';
import IcsPage from './pages/Ics';
import IntroPage from './pages/Intro';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/main" element={<InitialScreen />} />
          <Route path="/ic/:name" element={<IcsPage />} /> 
          <Route path="/profiles" element={<Profile />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
