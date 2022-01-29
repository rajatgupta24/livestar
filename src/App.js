import { Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage/LandingPage';
import QuizPage from './pages/QuizPage/QuizPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="quiz" element={<QuizPage/>} />
      </Routes>
    </div>
  );
}

export default App;
