import type { ChangeEvent, ReactNode } from "react";

interface ComboboxOption {
  id: number;
  name: string;
}

interface ComboboxProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  options: ComboboxOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}

export default function Combobox({
  name,
  label,
  placeholder,
  value,
  options,
  onChange,
  disabled = false,
  icon,
  className = "",
}: ComboboxProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-[10px] font-semibold text-surface-500 uppercase tracking-[0.12em] mb-1.5"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none">
            {icon}
          </span>
        )}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full ${icon ? "pl-8" : "pl-3"} pr-8 py-2 bg-[#F9FAFC] border border-surface-200 rounded-lg text-sm text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
