import Brands from "./components/Brands";
import Feature from "./components/Feature";
import HeroArea from "./components/HeroArea";
import Insights from "./components/Insights";
import Newsletter from "./components/Newsletter";
import Solution from "./components/Solution";

const Home = () => {
	return (
		<div>
			<HeroArea />
			<Brands />
			<Feature />
			<Solution />
			<Insights />
			<Newsletter />
		</div>
	);
};

export default Home;
