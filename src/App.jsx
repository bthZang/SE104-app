import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import router from './pages/testPage/routes';

import './App.css'
import { useDispatch } from 'react-redux';
import { setAccessToken } from './app/reducer/authReducer';


function App() {
  const dispatch = useDispatch()
  if (localStorage.getItem('accessToken')) {
    dispatch(setAccessToken({ access_token: localStorage.getItem('accessToken'), user_role: 'ADMIN' }))
  }

  return (
    <RouterProvider router={router} />
  );
}



export default App
