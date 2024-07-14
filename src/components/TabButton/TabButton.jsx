import "./TabButton.css";

export default function TabButton({ children, isSelcted, ...props }) {
	return (
		<li>
			<button className={isSelcted ? "active" : ""} {...props}>
				{children}
			</button>
		</li>
	);
}
