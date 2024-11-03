"use client";

import Aos from "aos";
import Link from "next/link";
import { useEffect } from "react";
import { BRANDS } from "../constants";

const Brands = () => {
	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true
		});
	}, []);

	return (
		<div className="hero-brand">
			<div className="container">
				<div className="row">
					<div data-aos="fade-up" data-aos-duration="1000">
						<div className="col-md-12">
							<p className="text-center">Preferred by Teams at</p>

							{/* Brands images */}
							<ul>
								{BRANDS.map((brand, idx) => (
									<li key={idx}>
										<Link href={brand.href}>
											<img src={brand.image} alt={brand.name} />
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
