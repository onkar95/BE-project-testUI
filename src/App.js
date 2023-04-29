import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './component/Test';


function App() {
  return (
    <div>
      <Test />
      <Router>

        <Routes>
          {/* <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/test" element={<Dashboard />} />
                  <Route path="/instructions" element={<Home />} />
                  <Route path="/job" element={<Jobs />} /> */}
        </Routes>
      </Router>
    </div >
  );
}

export default App;


