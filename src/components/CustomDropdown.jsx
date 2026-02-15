import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select option",
  error
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  const handleSelect = (option) => {
    onChange({
      target: {
        name,
        value: option.value
      }
    });
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-3">
          {label}
        </label>
      )}

      {/* Dropdown Button */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          w-full px-5 py-3.5 rounded-xl
          bg-[#0A0A0A] text-white
          border cursor-pointer
          flex items-center justify-between
          transition-all duration-200
          ${error
            ? "border-red-500/50 focus:border-red-500"
            : "border-gray-700 focus:border-cyan-400"
          }
          hover:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-cyan-400/20
        `}
      >
        <span className={value ? "text-white" : "text-gray-500"}>
          {selectedLabel}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-[#0F172A] border border-gray-700/50 rounded-xl shadow-xl overflow-hidden">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-5 py-3 cursor-pointer text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-400 text-xs mt-2 ml-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
