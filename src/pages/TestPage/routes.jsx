import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../homePage/homePage';
import AccountingPage from '../AccoutingPage/accountingPage';
import AdminPage from '../adminPage/adminPage';
import HRPage from '../HRPage/HRPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AccountingPage />,
    },
    
]);

export default router;