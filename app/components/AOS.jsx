"use client";

import Aos from "aos";
import { useEffect } from "react";

const AOS = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000
		});
	}, []);

	return null;
};

export default AOS;
