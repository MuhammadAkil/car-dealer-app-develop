'use client';

import { useEffect, useState } from 'react';
import { Text, Input } from 'rizzui';

type InputFieldTypes = {
  label?: string;
  placeholder?: string;
  value: string[];
  onChange: (value: string[]) => void;
};

export default function InputField({
  label,
  value=[''],
  onChange,
  placeholder,
}: InputFieldTypes) {
  const [fieldVal, setFieldVal] = useState(value[0] ?? '');

  function handleChange(newValue: string) {
    setFieldVal(newValue);
    onChange([newValue, newValue]);
  }

  return (
    <div className="">
      <Input
        label={label}
        inputClassName="w-full h-9 mb-2"
        type="text"
        placeholder={placeholder}
        value={fieldVal}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
