import { useEffect, useRef } from "react";

export const useOnClickOutside = (elementRef: any, callback: () => void) => {
  useEffect(() => {
    function handler(event: MouseEvent | TouchEvent) {
      const MenuButton = document.getElementById("toggleButton");
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node) &&
        MenuButton &&
        !MenuButton.contains(event.target as Node)
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [elementRef, callback]);
  return elementRef;
};
