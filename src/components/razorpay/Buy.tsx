"use client";
import React, { useState } from "react";

const Buy = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <button
        disabled={isLoading}
        className={`bg-blue-500 text-white font-semibold mt-20 py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Checkout"}
      </button>
    </div>
  );
};

export default Buy;
