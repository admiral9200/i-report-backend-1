import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Dashboard from './pages/Dashboard/index.js';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    } else {
      navigate("/auth/signin");
    }
  }, [navigate, loggedIn]);


  const renderPage = () => {
    if (loggedIn) {
      return loading ? (
        <Loader />
      ) : (
        <>
          <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto' />
          <Routes>
            <Route element={<DefaultLayout />} />
            <Route index element={<Dashboard />} />
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}

          </Routes>
        </>
      );
    } else {
      return (
        <>
          <Toaster position="top-right" reverseOrder={false} containerClassName="overflow-auto" />
          <Routes>
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Routes>
        </>
      );
    }
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return renderPage();
}

export default App;
