"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Bot from "../../public/assets/img/Asset 2.png";
import Avatar from "../../public/assets/img/user-spellie.avif";
import { MESSAGES } from "../constants";

const HeroArea = () => {
	// State to manage messages and user input
	const [messages, setMessages] = useState(MESSAGES);
	const [userInput, setUserInput] = useState("");
	const chatListRef = useRef(null);

	// Function to add a new message to the chat
	const addMessage = (message) => {
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	// Function to handle message submission
	const submitMessage = () => {
		// Check if the user input is not just whitespace
		if (userInput.trim()) {
			const currentTime = new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});

			// Add user message to the chat
			addMessage({
				sender: "You",
				time: currentTime,
				text: userInput
			});

			setUserInput("");

			// Simulate Spellie's response after a short delay
			setTimeout(() => {
				addMessage({
					sender: "Spellie",
					time: currentTime,
					text: "Free quote limit reached. Please upgrade for unlimited access." // Response message
				});
			}, 500); // Delay of 500 milliseconds before adding the response
		}
	};

	// Handle key press events in the input field
	const handleKeyPress = (event) => {
		// Check if the Enter key was pressed
		if (event.key === "Enter") {
			event.preventDefault();
			submitMessage();
		}
	};

	// Handle send button click event
	const handleSendClick = (event) => {
		event.preventDefault();
		submitMessage();
	};

	// Effect to automatically scroll to the bottom of the chat list when messages change
	useEffect(() => {
		if (chatListRef.current) {
			chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div className="hero-area">
			<div className="container">
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row">
						<div className="col-md-12">
							<h1 className="title">
								<span>Spellie</span> - Correct Grammar <br />
								<span>in Minutes!</span>
							</h1>
							<p className="text-center mx-850">
								{`An AI assistant to correct your grammar and language in Slack -
								"Public", "Private", "User" Channels`}
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
										href="#pricing"
									>
										View Pricing
									</a>
								</div>
							</div>

							{/* Chat lists */}
							<div className="hero-chat mx-850">
								<div className="hero-chat-list" ref={chatListRef}>
									{messages.map((message, idx) => (
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
								<form
									className="hero-chat-input"
									onSubmit={(e) => e.preventDefault()}
								>
									<input
										type="text"
										id="userInput"
										placeholder="Type your message"
										value={userInput}
										onChange={(e) => setUserInput(e.target.value)}
										onKeyPress={handleKeyPress}
									/>
									<button onClick={handleSendClick} type="submit">
										<Image
											src="/assets/img/icon/send.svg"
											alt="send"
											width={24}
											height={24}
										/>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroArea;
