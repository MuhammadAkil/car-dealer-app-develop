"use client";

import { useState } from "react";
import { Select } from "rizzui";

export default function SimpleSelect({
  buttonText,
  options,
}: {
  buttonText: string;
  options: { label: string; value: string; onClick?: () => void; icon?: React.ReactNode }[];
}) {
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
    const selectedOption = options.find(option => option.value === selectedValue);
    if (selectedOption && selectedOption.onClick) {
      selectedOption.onClick();
    }
  };

  return (
    <Select
      label={buttonText}
      options={options.map(({ label, value }) => ({ label, value }))}
      value={value}
      onChange={handleChange}
    />
  );
}
