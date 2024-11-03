import Image from "next/image";
import Link from "next/link";
import { BRANDS } from "../constants";

const Brands = () => {
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
											<Image
												src={brand.image}
												alt={brand.name}
												width={190}
												height={74}
											/>
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
