import "aos/dist/aos.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/lenis.css";
import "../public/assets/css/styles.css";
import AOS from "./components/AOS";
import "./globals.css";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import PercentageBar from "./shared/PercentageBar";

export const metadata = {
	title: "Spellie",
	description: "Spellie - Correct Grammar in Minutes!"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<AOS />
				<PercentageBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
