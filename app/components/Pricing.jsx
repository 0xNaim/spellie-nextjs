"use client";

import { useEffect, useState } from "react";
import { PRICING_PLANS } from "../constants";
import PlanCard from "./PlanCard";

const Pricing = () => {
	const [isMonthly, setIsMonthly] = useState(true);
	const [filteredPlans, setFilteredPlans] = useState([]);

	// Handle toggle pricing
	const togglePricing = () => {
		setIsMonthly((prev) => !prev);
	};

	useEffect(() => {
		const filtered = PRICING_PLANS.filter((plan) =>
			isMonthly ? plan.planType === "monthly" : plan.planType === "yearly"
		);
		setFilteredPlans(filtered);
	}, [isMonthly]);

	// Handler for "Start Trial"
	const handleStartTrial = (plan) => {
		console.log(`Starting trial for ${plan.name}`);
	};

	// Handler for "Subscribe"
	const handleSubscribe = (plan) => {
		console.log(`Subscribing to ${plan.name}`);
	};

	return (
		<div className="pricing-area">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1400">
					<div className="row">
						<div className="col-md-12">
							<h2 className="title-2">
								Select a <span>Pricing Plan</span>
							</h2>
							<div className="pricing-tab">
								<button
									className={isMonthly ? "active" : ""}
									onClick={togglePricing}
								>
									Monthly
								</button>
								<button
									className={!isMonthly ? "active" : ""}
									onClick={togglePricing}
								>
									Yearly
								</button>
							</div>
						</div>
					</div>

					{/* Pricing plan */}
					<div className="row gy-4">
						{filteredPlans.map((plan) => (
							<div className="col-md-4" key={plan.id}>
								<div
									data-aos="fade-up"
									data-aos-duration={1600 - plan.id * 200}
								>
									<PlanCard
										plan={plan}
										isMonthly={isMonthly}
										onStartTrial={() => handleStartTrial(plan)}
										onSubscribe={() => handleSubscribe(plan)}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
