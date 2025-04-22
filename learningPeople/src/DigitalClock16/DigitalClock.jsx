import React, { useState, useEffect } from "react";


const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const tick = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(tick);
    }, []);

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        const meridiem = hours > 12 ? "PM": "AM"
        // hours = hours%12 || 12
        return `${hours}:${minutes}:${seconds}- ${meridiem}`;
    };

    return (
    <>
    <div className="clock-container">
        <div className="clock">{formatTime(time)}</div>
    </div>
    </>
    )
}

export default DigitalClock