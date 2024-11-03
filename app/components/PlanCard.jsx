import Image from "next/image";

const PlanCard = ({ plan, isMonthly, onStartTrial, onSubscribe }) => {
	return (
		<div className="pricing-item">
			<h3>
				{plan.name}
				{plan.isPopular && (
					<Image
						src="assets/img/pro-btn.svg"
						alt="pro"
						width={92}
						height={26}
						quality={100}
					/>
				)}
			</h3>
			<p>{plan.description}</p>
			<h4>
				<span>{isMonthly ? plan.monthlyPrice : plan.yearlyPrice}</span>
				<sub>/{isMonthly ? "m" : "y"}</sub>
			</h4>
			<p>Pause or cancel anytime</p>
			<div className="pricing-button">
				<button onClick={onStartTrial}>Start Trial</button>
				<button onClick={onSubscribe}>Subscribe</button>
			</div>
			<ul>
				{plan.features.map((feature, index) => (
					<li key={index}>
						<Image
							src="/assets/img/check.svg"
							alt="check"
							width={24}
							height={24}
						/>
						{feature.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PlanCard;
