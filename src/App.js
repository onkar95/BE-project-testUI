import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './component/Test';
import TestHome from './component/TestHome';
import ThankYou from './component/ThankYou';
import { TestDataProvider } from './context/TestContext';


function App() {
  return (
    <div>
      <TestDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TestHome />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </TestDataProvider>
    </div >
  );
}

export default App;


