import React from "react";
import { useEffect, useState } from "react";
import "./CaseStudy.css";

const CaseStudy = () => {
  const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(ONE_MONTH);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return (
    <div className="study-wrapper">
      <h3>coming soon...</h3>
      <h3 className="count-down">
        {days} days {hours} hrs {minutes} m {seconds} sec
      </h3>
    </div>
  );
};

export default CaseStudy;
