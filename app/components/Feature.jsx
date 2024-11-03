import Image from "next/image";
import { FEATURES } from "../constants";

const Feature = () => {
	return (
		<div className="feature-area mt-192">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-md-12">
							<h2 className="title-2">
								Elevate Your Productivity <span>to New Heights</span>
							</h2>
						</div>
					</div>
					<div className="row gy-4">
						{FEATURES.map((feature, index) => (
							<FeatureItem
								key={index}
								imgSrc={feature.imgSrc}
								title={feature.title}
								description={feature.description}
								delay={feature.delay}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const FeatureItem = ({ imgSrc, title, description, delay }) => {
	return (
		<div className="col-md-4">
			<div data-aos="fade-up" data-aos-delay={delay}>
				<div className="feature-item">
					<Image src={imgSrc} alt="icon" width={80} height={80} />
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;
