import Link from "next/link";

const Button = ({ text, href = "#", className }) => {
	return (
		<Link className={`btn btn-secondary ${className}`} href={href}>
			{text}
		</Link>
	);
};

export default Button;
