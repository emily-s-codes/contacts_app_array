import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleContactPage from './pages/singleContactPage/SingleContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:contact" element={<SingleContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
