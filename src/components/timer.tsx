import React, {useState} from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    const [currentHours, setCurrentHours] =useState(0);
    const [currentMinutes, setCurrentMinutes] =useState(0);
    const [currentSeconds, setCurrentSeconds] =useState(0);


    const calculateTime = () => {
        const checkMinutes = Math.floor(count / 60);
        const hours = Math.floor(count / 3600);
        const minutes = checkMinutes % 60;
        const seconds = count % 60;
        setCurrentHours(hours);
        setCurrentMinutes(minutes);
        setCurrentSeconds(seconds)
    }

    return <span>{`${currentHours}:${currentMinutes}:${currentSeconds}`}</span>
}