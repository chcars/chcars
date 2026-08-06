import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingActions from "../components/common/FloatingActions";
import LocalBusinessSchema from "../components/common/LocalBusinessSchema";
import "./MainLayout.css";

function MainLayout() {
	return (
		<div className="main-layout">
			<Navbar />
			<main className="main-layout__content">
				<Outlet />
			</main>
			<Footer />
			<FloatingActions />
			<LocalBusinessSchema />
		</div>
	);
}

export default MainLayout;

