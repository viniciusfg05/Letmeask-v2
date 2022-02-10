
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Home } from './pages/home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new/room" element={<NewRoom />} />
        </Routes>
    </Router>
    
  );
}

export default App;