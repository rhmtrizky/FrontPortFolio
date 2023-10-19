import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import Loading from './components/loading';
import AboutMe from './pages/aboutMe';

function App() {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/aboutMe"
              element={<AboutMe />}
            />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
