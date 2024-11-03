"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/img/Asset1.png";
import SearchIcon from "../assets/img/search.svg";
import { MENU_ITEMS } from "../constants/menu-items";
import Button from "../ui/Button";

const Header = () => {
	const [showMobileMenu, setShowMenu] = useState(false);

	const handleToggleMenu = () => setShowMenu((prev) => !prev);

	return (
		<header>
			<div className="desktop-header">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-2">
							<Link href="/">
								<Image src={Logo} alt="logo" width={100} height={47} />
							</Link>
						</div>
						<div className="col-md-8">
							<nav>
								<ul>
									{MENU_ITEMS.map((item, idx) => (
										<li key={idx}>
											<Link href={item?.link}>{item?.name}</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className="col-md-2 text-end">
							<div className="search-icon">
								<Link href="#" id="toggleSearch">
									<Image
										src={SearchIcon}
										alt="Search Icon"
										width={24}
										height={24}
									/>
								</Link>
							</div>
							<Button text="Get Started" />
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-header">
				<Link href="/">
					<Image src={Logo} alt="logo" width={100} height={47} />
				</Link>

				<span onClick={handleToggleMenu} className="mobile-menu-open-icon">
					<svg
						width="800px"
						height="800px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path
								id="Vector"
								d="M12 17H19M5 12H19M5 7H19"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
					</svg>
				</span>

				<div className={`mobile-menu ${showMobileMenu ? "show-menu" : ""}`}>
					<strong onClick={handleToggleMenu} className="mobile-menu-close-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-x-circle-fill"
							viewBox="0 0 16 16"
						>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
						</svg>
					</strong>
					<nav>
						<ul>
							{MENU_ITEMS.map((item, idx) => (
								<li key={idx}>
									<Link href={item?.link}>{item?.name}</Link>
								</li>
							))}
						</ul>
					</nav>
					<Button text="Get Started" />
					<div>
						<input
							className="mobile-search"
							type="text"
							placeholder="Search..."
						/>
					</div>
				</div>
			</div>

			<div id="searchBar" className="hidden search-bar">
				<input type="text" placeholder="Search..." />
			</div>
		</header>
	);
};

export default Header;
