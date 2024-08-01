"use client";

import { useState } from "react";
import { Dropdown, Button } from "rizzui";
import { FaChevronDown } from "react-icons/fa6";

export default function SimpleDropdown({
  buttonText,
  options,
}: {
  buttonText: string;
  options: { label: string; onClick: () => void; icon: React.ReactNode }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown onChange={handleToggle}>
      <Dropdown.Trigger>
        <Button as="span" variant="solid" className="cursor-pointer">
          {buttonText}
          <FaChevronDown
            className={`ml-2 w-5 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu className="w-150">
        {options.map((op: any, key: number) => (
          <Dropdown.Item key={key}>
            {op.icon}
            <span className="ml-3"> {op.label}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
