"use client";

import { useEffect, useRef, useState } from "react";
import { Dropdown, Button } from "rizzui";
import { FaChevronDown } from "react-icons/fa6";

export default function SimpleDropdown({
  buttonText,
  options,
  placement = "bottom-end",  // Default placement value

}: {
  buttonText: string;
    options: { label: string; onClick: () => void; icon: React.ReactNode }[];
    placement?: "bottom-end" | "bottom-start" | "top-end" | "top-start";  // Placement options

}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="inline-block relative">
      <Dropdown onChange={handleToggle} placement={placement}>
        <Dropdown.Trigger as="button" onClick={handleToggle}>
          <Button
            as="span"
            variant="solid"
            className="hover:bg-primaryHover cursor-pointer"
          >
            {buttonText}
            <FaChevronDown
              className={`ml-2 w-5 transition-transform duration-300 ${
                isOpen ? "transform rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu className="w-150">
          {options.map((op: any, key: number) => (
            <Dropdown.Item key={key}>
              {op.icon}
              <span className="ml-1"> {op.label}</span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
