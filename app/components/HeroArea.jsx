"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import Bot from "../../public/assets/img/Asset 2.png";
import Avatar from "../../public/assets/img/user-spellie.avif";
import { MESSAGES } from "../constants";

const HeroArea = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		});
	}, []);

	return (
		<div className="hero-area">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-md-12">
							<h1 className="title">
								<span>Spellie</span> - Correct Grammer <br />
								<span>in Minutes!</span>
							</h1>
							<p className="text-center mx-850">
								An Ai asisstant to correct your grammar and language in Slack -
								"Public", "Private", "User" Channels
							</p>
							<div className="hero-btn">
								<div data-aos="fade-up" data-aos-duration="1000">
									<a
										className="btn btn-primary"
										data-aos-delay="200"
										data-aos="fade-up"
										href="https://messagecapture.onrender.com/install"
									>
										Install
									</a>
									<a
										className="btn btn-tertiary"
										data-aos-delay="300"
										data-aos="fade-up"
										href="#"
									>
										View Pricing
									</a>
								</div>
							</div>

							{/* Chat lists */}
							<div className="hero-chat mx-850">
								<div className="hero-chat-list" id="chatList">
									{MESSAGES.map((message, idx) => (
										<div key={idx} className="hero-chat-item">
											<Image
												src={message?.sender === "You" ? Avatar : Bot}
												alt={message.sender}
											/>
											<div className="hero-chat-item-content">
												<h3>
													{message.sender} <span>{message.time}</span>
												</h3>
												<p>{message.text}</p>
											</div>
										</div>
									))}
								</div>
								<div className="hero-chat-input">
									<input
										type="text"
										id="userInput"
										placeholder="Type your message"
									/>
									<button id="sendButton">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
										>
											<mask
												id="mask0_83_965"
												style={{ maskType: "alpha" }}
												maskUnits="userSpaceOnUse"
												x="0"
												y="0"
												width="24"
												height="24"
											>
												<rect width="24" height="24" fill="#D9D9D9" />
											</mask>
											<g mask="url(#mask0_83_965)">
												<path
													d="M3 20V14L11 12L3 10V4L22 12L3 20Z"
													fill="url(#paint0_linear_83_965)"
												/>
											</g>
											<defs>
												<linearGradient
													id="paint0_linear_83_965"
													x1="3"
													y1="4"
													x2="24.0458"
													y2="7.42352"
													gradientUnits="userSpaceOnUse"
												>
													<stop stopColor="#A570FF" />
													<stop offset="0.500005" stopColor="#FF6EB2" />
													<stop offset="1" stopColor="#FFAD66" />
												</linearGradient>
											</defs>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroArea;
