import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Trabajos from "../pages/Trabajos/Trabajos";
import Faq from "../pages/Faq/Faq";
import Nosotros from "../pages/Nosotros/Nosotros";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "trabajos",
				element: <Trabajos />
			},
			{
				path: "faq",
				element: <Faq />
			},
			{
				path: "nosotros",
				element: <Nosotros />
			}
		]
	}
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
