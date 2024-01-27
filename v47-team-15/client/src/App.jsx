import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DisplayData from './pages/DisplayData.jsx';
import Registration from "./components/user_auth/Registration.jsx";
import './App.css';
import { UserProvider } from "./components/userContext.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<DisplayData />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
