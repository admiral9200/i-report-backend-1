import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import jwtDecode from "jwt-decode";

import Dashboard from './pages/Dashboard/index.js';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import { signOut, setLoggedIn, setCurrentUser } from "./redux/actions/auth";
import { setCurrentRoute } from "./redux/actions/route";
import { getProfile } from "./redux/actions/profile";

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const loggedIn = useSelector((state: any) => state.auth.loggedIn);
  const id = useSelector((state: any) => state.auth.currentUser.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Observe the change of route
  const location = useLocation();

  useEffect(() => {
    if (id) {
      dispatch(getProfile(id));
    }
  }, [id])

  useEffect(() => {
    dispatch(setCurrentRoute(location.pathname));
  }, [location])

  useEffect(() => {
    if(loggedIn) {
      console.log("hello")
      navigate("/");
    } else {
      navigate("/auth/signin");
    }
  }, [loggedIn])

  useEffect(() => {
    const checkUserData = async () => {
      try {
        const token = await localStorage.getItem("token");
        if (token) {
          const decodedToken: any = jwtDecode(token);
          const currentTime = Date.now() / 1000;
          if (decodedToken.exp < currentTime) {
            await localStorage.removeItem("token");
            dispatch(signOut());
          } else {
            console.log("decodedToken: ", decodedToken);
            if (decodedToken) {
              dispatch(setCurrentUser(decodedToken));
              dispatch(setLoggedIn());
            }
          }
        }
      } catch (err) {
        throw err;
      }
    }

    checkUserData();
  }, [loggedIn])

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