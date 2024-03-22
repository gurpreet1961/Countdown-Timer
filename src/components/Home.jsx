import React, { useState, useEffect } from "react";
import DateTimeInput from "./DateTimeInput";
import StartCancelButton from "./StartCancelButton";
import CountdownCards from "./CountdownCards";

function Home() {
	const [targetDate, setTargetDate] = useState("");
	const [countdown, setCountdown] = useState(null);
	const [timerFinished, setTimerFinished] = useState(false);
	const [timerRunning, setTimerRunning] = useState(false);

	const handleInputChange = (event) => {
		setTargetDate(event.target.value);
		setTimerFinished(false);
		setTimerRunning(false);
	};

	const startCountdown = () => {
		const targetTime = new Date(targetDate).getTime();
		const currentTime = new Date().getTime();
		const timeDifference = targetTime - currentTime;

		if (timeDifference > 0) {
			setCountdown(timeDifference);
			setTimerFinished(false);
			setTimerRunning(true);
		}
	};

	const stopCountdown = () => {
		setCountdown(null);
		setTimerFinished(false);
		setTimerRunning(false);
	};

	useEffect(() => {
		let timer;

		if (countdown !== null) {
			timer = setInterval(() => {
				setCountdown((prevCountdown) => {
					if (prevCountdown > 1000) {
						return prevCountdown - 1000;
					} else {
						clearInterval(timer);
						setTimerFinished(true);
						setTimerRunning(false);
						return null;
					}
				});
			}, 1000);
		}

		return () => clearInterval(timer);
	}, [countdown]);

	const isTargetDateValid =
		targetDate &&
		new Date(targetDate).getTime() - new Date().getTime() >
			100 * 24 * 60 * 60 * 1000;

	return (
		<div className="App">
			<h1>
				Countdown <span>Timer</span>
			</h1>
			<DateTimeInput value={targetDate} onChange={handleInputChange} />
			<StartCancelButton
				isRunning={timerRunning}
				onStart={startCountdown}
				onCancel={stopCountdown}
				isDiable={isTargetDateValid}
			/>
			{timerFinished ? (
				<h2>🎉The countdown is over! What's next on your adventures?🎉</h2>
			) : countdown !== null && countdown <= 100 * 24 * 60 * 60 * 1000 ? (
				<CountdownCards countdown={countdown} />
			) : isTargetDateValid ? (
				<p>Selected time is more than 100 days.</p>
			) : null}
		</div>
	);
}

export default Home;
