import Brands from "./components/Brands";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import HeroArea from "./components/HeroArea";
import Insights from "./components/Insights";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Solution from "./components/Solution";

const Home = () => {
	return (
		<div>
			<HeroArea />
			<Brands />
			<Feature />
			<Solution />
			<Pricing />
			<Faq />
			<Insights />
			<Newsletter />

			{/* Glowing button */}
			<div className="glowing-button">
				<a href="https://messagecapture.onrender.com/install" target="_blank">
					Get Spellie For $29
				</a>
			</div>
		</div>
	);
};

export default Home;
