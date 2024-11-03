import "../app/assets/css/aos.min.css";
import "../app/assets/css/bootstrap.min.css";
import "../app/assets/css/lenis.css";
import "../app/assets/css/styles.css";
import "./globals.css";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export const metadata = {
	title: "Spellie",
	description: "Spellie - Correct Grammar in Minutes!"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
