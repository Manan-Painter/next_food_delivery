import React from "react";
import { TbLoader3 } from "react-icons/tb";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TbLoader3 className="animate-spin text-6xl text-orange-500" />
    </div>
  );
};

export default Loading;
