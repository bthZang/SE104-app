import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import router from './pages/TestPage/routes';

import './App.css'


function App() {

  return (
    <RouterProvider router={router} />
  );
}



export default App
