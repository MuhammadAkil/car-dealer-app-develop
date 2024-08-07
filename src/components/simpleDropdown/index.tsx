"use client";

import { useState } from "react";
import { Dropdown, Button } from "rizzui";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function SimpleDropdown({
  buttonText,
  options,
}: {
  buttonText: string;
  options: { label: string; onClick: () => void; icon: React.ReactNode }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dropdown onChange={handleToggle}>
      <Dropdown.Trigger>
        <Button as="span" variant="solid" className="cursor-pointer" onClick={() => handleToggle(!isOpen)}>
          {buttonText}
          {isOpen ? (
            <FaChevronUp className="ml-2 w-5 transition-transform duration-300" />
          ) : (
            <FaChevronDown className="ml-2 w-5 transition-transform duration-300" />
          )}
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu className="w-auto" onClick={() => handleToggle(!isOpen)}>
        {options.map((op, key) => (
          <Dropdown.Item key={key} onClick={op.onClick}>
            {op.icon}
            <span className="ml-3"> {op.label}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
