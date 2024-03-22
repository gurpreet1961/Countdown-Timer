import React from "react";

function Card({ label, value }) {
	return (
		<div className="card">
			<h3>{value}</h3>
			<p>{label}</p>
		</div>
	);
}

export default Card;
