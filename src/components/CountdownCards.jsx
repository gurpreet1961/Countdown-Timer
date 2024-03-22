import React from "react";
import Card from "./Card";

function CountdownCards({ countdown }) {
	const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

	return (
		<div className="countdown-cards">
			<Card label="Days" value={days} />
			<Card label="Hours" value={hours} />
			<Card label="Minutes" value={minutes} />
			<Card label="Seconds" value={seconds} />
		</div>
	);
}

export default CountdownCards;
