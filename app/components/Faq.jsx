"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../constants";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	// Handle toggle accordion
	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div id="faq" className="mx-auto faq-area mx-850 mtb-192">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-md-12">
							<h2 className="title-2">
								Frequently Asked <span>Questions</span>
							</h2>
							<div className="accordion" id="accordionInner">
								{FAQ_ITEMS.map((item, index) => (
									<FaqItem
										key={index}
										title={item.title}
										content={item.content}
										isActive={activeIndex === index}
										onClick={() => toggleAccordion(index)}
										duration={item.duration}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const FaqItem = ({ title, content, isActive, onClick, duration }) => {
	return (
		<div data-aos="fade-up" data-aos-duration={duration}>
			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
						className={`accordion-button ${isActive ? "" : "collapsed"}`}
						type="button"
						onClick={onClick}
					>
						{title}
					</button>
				</h2>
				<div className={`accordion-collapse collapse ${isActive && "show"}`}>
					<div className="accordion-body">{content}</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
