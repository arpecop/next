export const config = {
	runtime: "experimental-edge",
};
const Banicak = ({
	info,
	name,
	username,
}: {
	info: string;
	name?: string;
	username?: string;
	userpicture?: string;
}) => {
	const bg =
		"https://eziktokfriendly114941-staging.s3.eu-west-1.amazonaws.com/public/banica1.jpg";
	return (
		<div
			style={{
				height: 630,
				width: 1200,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
				backgroundImage: `url(${bg})`,
				backgroundSize: "auto",
			}}
		>
			<div
				style={{
					display: "flex",
					maxWidth: 630,
					fontSize: "50px",
					transform: "rotate(-4deg)",
					backgroundColor: "rgba(255, 255, 255, 0.8)",
					perspective: "500px",
					paddingTop: "0",
					paddingBottom: "0",
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "1rem",
					borderWidth: "8px",
					borderColor: "#3730A3",
				}}
			>
				<h2
					style={{
						display: "flex",
						color: "#111827",
						fontWeight: "700",
						letterSpacing: "-0.025em",
						textAlign: "left",
						flexDirection: "column",
					}}
				>
					{username && <span>{username}</span>}
					<span style={{ color: "#3730A3" }}>{info}</span>
				</h2>
			</div>
			<div
				style={{
					position: "absolute",
					top: "1rem",
					left: "1rem",
					paddingLeft: "1rem",
					paddingRight: "1rem",
					fontSize: "1.25rem",
					lineHeight: "1.75rem",
					borderRadius: "9999px",
				}}
			>
				{name}
			</div>
			<div
				style={{
					display: "flex",
					position: "absolute",
					right: "1rem",
					bottom: "1rem",
					paddingLeft: "1rem",
					paddingRight: "1rem",
					backgroundColor: "#F9FAFB",
					fontSize: "1.25rem",
					lineHeight: "1.75rem",
					borderRadius: "9999px",
				}}
			>
				www.kloun.lol
			</div>
		</div>
	);
};
export default Banicak;
