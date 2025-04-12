import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Bookmarks from './pages/Bookmarks.jsx';
import Loader from './components/Loader';
import NotFound from './components/NotFound.jsx';
import './App.css';
import ReadingMode from './components/ReadingMode.jsx';
import { useGlobalContext } from './Context.jsx';
import BackToTopButton from './BackToTop.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));

export const App = () => {
  const [theme, setTheme] = useState('light');
  const { readingMode } = useGlobalContext();

  useEffect(() => {
    document.body.classList.toggle('darkmode', theme === 'dark');
  }, [theme]);

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (readingMode === true) {
      document.body.classList.add('scroll-none');
    } else {
      document.body.classList.remove('scroll-none');
    }
  }, [readingMode]);

  return (
    <Router>
      {
        readingMode !== true && <Navbar />
      }
      <Suspense fallback={<Loader />}>
        {/* Navbar */}

        <ReadingMode>
          {/* Theme toggle button */}
          {
            readingMode !== true &&
            <button className="theme-switch" onClick={handleClick} aria-label="Toggle Theme"
              aria-pressed={theme === 'dark'} aria-labelledby="theme-switch-label"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#e3e3e3"
              >
                <path d="M480-346.67q55.33 0 94.33-39t39-94.33q0-55.33-39-94.33t-94.33-39q-55.33 0-94.33 39t-39 94.33q0 55.33 39 94.33t94.33 39Zm0 66.67q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-446.67H40v-66.66h160v66.66Zm720 0H760v-66.66h160v66.66ZM446.67-760v-160h66.66v160h-66.66Zm0 720v-160h66.66v160h-66.66ZM260-655.33l-100.33-97 47.66-49 96 100-43.33 46Zm493.33 496-97.66-100.34 45-45.66 99.66 97.66-47 48.34Zm-98.66-541.34 97.66-99.66 49 47L702-656l-47.33-44.67ZM159.33-207.33 259-305l46.33 45.67-97.66 99.66-48.34-47.66ZM480-480Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#e3e3e3"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q10 0 20.5.67 10.5.66 24.17 2-37.67 31-59.17 77.83T444-660q0 90 63 153t153 63q53 0 99.67-20.5 46.66-20.5 77.66-56.17 1.34 12.34 2 21.84.67 9.5.67 18.83 0 150-105 255T480-120Zm0-66.67q102 0 179.33-61.16Q736.67-309 760.67-395.67q-23.34 9-49.11 13.67-25.78 4.67-51.56 4.67-117.46 0-200.06-82.61-82.61-82.6-82.61-200.06 0-22.67 4.34-47.67 4.33-25 14.66-55-91.33 28.67-150.5 107-59.16 78.34-59.16 175.67 0 122 85.66 207.67Q358-186.67 480-186.67Zm-6-288Z" />
              </svg>
            </button>
          }

          {/* Routes for different sections */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </ReadingMode>
      </Suspense>
      <BackToTopButton />
    </Router>
  );
}

export default App;
