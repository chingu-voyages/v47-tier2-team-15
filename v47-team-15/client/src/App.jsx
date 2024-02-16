import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import DisplayData from './pages/DisplayData.jsx';
import './App.css';
import { UserProvider } from './components/userContext.jsx';
import UserProfile from './pages/UserProfile.jsx';
import CryptoNews from './pages/CryptoNews.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<DisplayData />} />

            <Route path="/portfolio" element={<UserProfile />} />
            <Route path="/news" element={<CryptoNews />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
