import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/Asset1.png";
import { FOOTER_ITEMS } from "../constants";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row gy-4">
					<div className="col-md-6">
						<Image src={Logo} alt="logo" width={100} height={47} />
						<p>
							Step into the future of effortless assistance, where innovation
							meets simplicity.
						</p>
					</div>
					<div className="col-md-6">
						<div className="row gy-4">
							{FOOTER_ITEMS.map((section, index) => (
								<FooterSection
									key={index}
									title={section.title}
									links={section.links}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					<div className="row gy-2">
						<div className="col-md-6 align-self-center">
							<p>Copyright © 2023 Spellie. All rights reserved.</p>
						</div>
						<div className="col-md-6">
							<ul>
								<li>
									<Link href="#">Terms of Service</Link>
								</li>
								<li>
									<Link href="#">Privacy Policy</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

const FooterSection = ({ title, links }) => (
	<div className="col-md-4">
		<div className="footer-item">
			<h2>{title}</h2>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.href}>{link.name}</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default Footer;
