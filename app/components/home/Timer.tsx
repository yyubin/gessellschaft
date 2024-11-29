// components/Timer.tsx
"use client"
import { useState, useEffect } from "react";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState<string>("");

    const calculateTimeLeft = () => {
        const now = new Date();
        const nextThursday = new Date();

        // 다음 목요일 설정
        nextThursday.setDate(
            now.getDate() + ((4 - now.getDay() + 7) % 7 || 7)
        );
        nextThursday.setHours(6, 0, 0, 0); // 오전 6시 설정

        const difference = nextThursday.getTime() - now.getTime();

        if (difference <= 0) return "00:00:00:00"; // 시간이 0일 경우

        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"); // 일 계산
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

        return `${days}:${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 제거
    }, []);

    return (
        <div className="text-6xl font-bold bg-neutral-800 text-white py-4 px-8 rounded-lg shadow-lg">
            {timeLeft}
        </div>
    );
};

export default Timer;
