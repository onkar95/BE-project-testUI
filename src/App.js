import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './component/Test';
import TestHome from './component/TestHome';
import ThankYou from './component/ThankYou';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="/test" element={<Test />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;


