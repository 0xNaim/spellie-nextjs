import Image from "next/image";
import { SOLUTION_ITEMS } from "../constants";

const Solution = () => {
	return (
		<div id="solution" className="solution-area mtb-192">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-md-12">
							<h2 className="title-2">
								Your All-in-One Intelligent AI <span>Assistant Solution</span>
							</h2>
						</div>
						<div className="col-md-12">
							<div className="solution-item">
								<div data-aos="fade-up" data-aos-duration="800">
									<div className="row align-items-center">
										<div className="col-md-6 pr-47">
											<Image
												src="/assets/img/Asset1.png"
												alt="solution"
												width={480}
												height={225}
												style={{ width: "100%", height: "100%" }}
											/>
										</div>
										<div className="col-md-6 pl-47">
											<h3>Seamless Integrations</h3>
											<p>
												Effortlessly connect tools, databases, or import files.
												Spellie ensures compatibility with various platforms and
												file formats for a seamless experience.
											</p>
											<a className="btn btn-secondary" href="integrations.html">
												Learn more
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* Customized */}
							<div className="solution-item">
								<div data-aos="fade-up" data-aos-duration="800">
									<div className="row align-items-center">
										<div className="col-md-6 pr-47">
											<h3>Customized for Every Need</h3>
											<p>
												Craft dedicated assistants for teams, projects, or
												workflows. Boost team efficiency by 90% with tailored
												data access for each assistant.
											</p>
											<a className="btn btn-secondary" href="integrations.html">
												Learn more
											</a>
										</div>
										<div className="col-md-6 pl-47 mt-30">
											<div className="solution-item-list">
												{SOLUTION_ITEMS.map((solution, idx) => (
													<SolutionItem
														key={idx}
														imgSrc={solution.imgSrc}
														title={solution.title}
														description={solution.description}
													/>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Assistance everywhere */}
							<div className="solution-item">
								<div data-aos="fade-up" data-aos-duration="800">
									<div className="row align-items-center">
										<div className="col-md-6 pr-47">
											<div className="solution-item-list solution-item-chat">
												<div className="solution-chat-message">
													<div className="solution-chat-message-item">
														<Image
															src="/assets/img/Asset 2.png"
															alt="user"
															width={32}
															height={32}
														/>
														<div className="solution-chat-message-item-content">
															<h3>
																Jane Cooper <span>8:42 PM</span>
															</h3>
															<p>
																I think I done good on my exam, but my teacher
																sayed I might of missed some questions. I was
																studing all night and still feel like I could of
																done better.
															</p>
														</div>
													</div>
													<div className="solution-chat-message-item">
														<Image
															src="/assets/img/user-spellie.avif"
															alt="user"
															width={32}
															height={32}
														/>
														<div className="solution-chat-message-item-content">
															<h3>
																Spellie AI <span>8:42 PM</span>
															</h3>
															<p>
																I think I did well on my exam, but my teacher
																said I might have missed some questions. I was
																studying all night and still feel like I could
																have done better.
															</p>
														</div>
													</div>
													<div className="solution-chat-message-item">
														<Image
															src="/assets/img/Asset 2.png"
															alt="user"
															width={32}
															height={32}
														/>
														<div className="solution-chat-message-item-content">
															<h3>
																Jane Cooper <span>8:42 PM</span>
															</h3>
															<p>Awesome!</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6 pl-47 mt-30">
											<h3>Assistance Everywhere</h3>
											<p>
												Integrate Spellie into your favorite applications with
												our versatile options. From Slack to support apps,
												Zapier, Email software, and beyond – Spellie is ready to
												assist wherever you need it.
											</p>
											<a className="btn btn-secondary" href="integrations.html">
												Learn more
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const SolutionItem = ({ imgSrc, title, description }) => {
	return (
		<div className="solution-single">
			<Image src={imgSrc} alt="check" width={24} height={24} />
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Solution;
