"use client";
// components/ToggleSwitch.tsx
import { useState } from "react";
import { motion } from "framer-motion";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-orange-500" : "bg-gray-300"
      }`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="bg-white w-5 h-5 rounded-full shadow-lg"
        animate={{
          left: isOn ? "calc(100% - 16px)" : "0%",
        }}
        initial={false}
        transition={{
          duration: 0.15,
        }}
        style={{ position: "relative" }}
      />
    </div>
  );
};

export default ToggleSwitch;
