import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DisplayData from './pages/DisplayData.jsx'
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<DisplayData />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
