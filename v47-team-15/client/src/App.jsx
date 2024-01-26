import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DisplayData from './pages/DisplayData.jsx';
import Registration from "./components/user_auth/Registration.jsx";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<DisplayData />} />
            <Route path="/register" element={<Registration />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
