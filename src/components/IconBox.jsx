import React from "react";

export const IconBox = ({ icon, color, size, bg }) => {
  return (
    <div className={`rounded-full bg-${bg} shadow-md p-3 m-4 text-${color}`}>
      {React.cloneElement(icon, { size: size })}
    </div>
  );
};
