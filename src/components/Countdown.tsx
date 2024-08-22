"use client";

import React from "react";
import Countdown from "react-countdown";

// Set enddate to a future date
const enddate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3); // 3 days from now

const CountdownComponent: React.FC = () => {
  return (
    <div>
      <Countdown
        className="font-bold text-5xl text-orange-600"
        date={enddate}
      />
    </div>
  );
};

export default CountdownComponent;
