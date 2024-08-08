"use client";
// components/Popover.tsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  direction?: "top" | "right" | "bottom" | "left";
}

const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  direction = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDirectionClasses = (direction: string) => {
    switch (direction) {
      case "top":
        return "bottom-full mb-2";
      case "right":
        return "left-full ml-2";
      case "left":
        return "right-full mr-2";
      case "bottom":
      default:
        return "top-full mt-2";
    }
  };

  const directionClasses = getDirectionClasses(direction);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={togglePopover} className="cursor-pointer">
        {children}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={classNames(
              "absolute w-56 bg-white rounded-md shadow-lg z-10",
              directionClasses
            )}
          >
            <div className="text-gray-700 border rounded-lg">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Popover;
