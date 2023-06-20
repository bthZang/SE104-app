import { createBrowserRouter } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import AccountingPage from "../AccoutingPage/AccountingPage";
import AdminPage from "../AdminPage/AdminPage";
import HRPage from "../HRPage/HRPage";
import LoginPage from "../LoginPage/LoginPage";
import LoginOutlet from "../LoginPage/LoginOutlet/LoginOutlet";
import ForgotPasswordOutlet from "../LoginPage/ForgotPasswordOutlet/ForgotPasswordOutlet";
import AccessDenyPage from "../AccessDenyPage";
import UploadCV from "../UploadCV/UploadCV";
import ThanksForUploadCV from "../ThanksForUploadCV/ThanksForUploadCV";
import TestPage from "./TestPage";



const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
		children: [
			{
				index: true,
				element: <LoginOutlet />,
			},
			{
				path: "forgot-password",
				element: <ForgotPasswordOutlet />,
			},
		],
	},
	{
		path: "/hr",
		element: <HRPage />,
	},
	{
		path: "/accountant",
		element: <AccountingPage />,
	},
	{
		path: "/admin",
		element: <AdminPage></AdminPage>,
	},
	{
		path: "/accessDeny",
		element: <AccessDenyPage />,
	},
	{
		path: "/upload-cv",
		element: <UploadCV />,
	},
	{
		path: "/thanks-for-upload-cv",
		element: <ThanksForUploadCV />,
	},
	{
		path: "/test",
		element: <TestPage />,
	},
]);

export default router;
