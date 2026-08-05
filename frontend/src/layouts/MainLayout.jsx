import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingActions from "../components/common/FloatingActions";

function MainLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			<FloatingActions />
		</>
	);
}

export default MainLayout;
