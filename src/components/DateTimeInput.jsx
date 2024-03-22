import React from "react";

function DateTimeInput({ value, onChange }) {
	return (
		<div>
			<input type="datetime-local" value={value} onChange={onChange} />
		</div>
	);
}

export default DateTimeInput;
