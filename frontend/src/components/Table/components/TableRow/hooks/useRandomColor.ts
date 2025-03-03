import { useState, useEffect } from "react";

export const useRandomColor = () => {
  const [randomColor, setRandomColor] = useState<string>("");

  useEffect(() => {
    const colors = ["#E14165", "#C2C2FF", "#8686FF"];
    setRandomColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return randomColor;
};
