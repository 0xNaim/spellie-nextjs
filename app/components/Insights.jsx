import { INSIGHT_CARD_ITEMS } from "../constants";
import InsightCard from "./InsightCard";

const Insights = () => {
	return (
		<div className="insights-area">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1000">
					<h2 className="text-center insight-heading">
						Receive The Best <span className="">Insights</span>
					</h2>
					<div className="insight-cards">
						<div className="row">
							{INSIGHT_CARD_ITEMS.map((card, idx) => (
								<InsightCard
									key={idx}
									author={card.author}
									date={card.date}
									imageSrc={card.imageSrc}
									title={card.title}
									description={card.description}
									category={card.category}
								/>
							))}
						</div>
					</div>
					<div className="load-btn">
						<button className="btn btn-primary">View More</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Insights;
