import React from "react";

interface ToggleSwitchProps {
  isChecked: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked }) => {
  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1  transition-colors duration-300 ${
        isChecked ? "bg-green-700" : "bg-red-700"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isChecked ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
