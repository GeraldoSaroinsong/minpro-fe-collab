/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface IFormInput {
  id?: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  ref?: any;
  value?: string;
}

const FormInput: React.FC<IFormInput> = ({
  type,
  name,
  label,
  placeholder,
  onChange,
  ref,
  value,
}) => {
  const [status, setStatus] = useState<boolean>(false);

  if (type === "password") {
    const reveal = () => {
      setStatus(!status);
    };

    return (
      <div className="flex flex-col gap-0.25 text-gray-700">
        <label className="font-medium text-sm">{label}</label>
        <div className="flex gap-1 text-sky-500">
          <input
            id={name}
            name={name}
            ref={ref}
            type={status ? "text" : "password"}
            placeholder={placeholder}
            className="border p-2 rounded-md shadow-md bg-white w-full"
            onChange={onChange}
            value={value}
          />
          <button
            type="button"
            className="p-2 bg-white right-1 top-1.5"
            onClick={reveal}
          >
            {!status ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="flex flex-col gap-0.25 ">
        <label className="font-medium text-sm">{label}</label>
        <div className="flex gap-1 text-gray-700">
          <textarea
            id={name}
            name={name}
            ref={ref}
            placeholder={placeholder}
            className="border p-2 rounded-md shadow-md bg-white w-full"
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-0.25 text-gray-700">
      <label className="font-medium text-sm">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="border p-2 rounded-md shadow-md bg-white"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
