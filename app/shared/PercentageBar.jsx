"use client";

import { useEffect, useRef } from "react";

const PercentageBar = () => {
	const percentageBarRef = useRef(null);

	const updateScrollPercentage = () => {
		if (percentageBarRef.current) {
			const scrollTop = window.scrollY;
			const documentHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;
			const percentage =
				Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + "%";

			percentageBarRef.current.style.width = percentage;
		}
	};

	useEffect(() => {
		// Attach scroll and load event listeners
		window.addEventListener("scroll", updateScrollPercentage);
		window.addEventListener("load", updateScrollPercentage);

		// Cleanup function to remove event listeners
		return () => {
			window.removeEventListener("scroll", updateScrollPercentage);
			window.removeEventListener("load", updateScrollPercentage);
		};
	}, []);

	return <div className="percentage-bar" ref={percentageBarRef} />;
};

export default PercentageBar;
