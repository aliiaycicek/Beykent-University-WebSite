interface BeykentDropdownProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function BeykentDropdown({
  options,
  value,
  onChange,
  placeholder = 'Seçiniz',
  className = '',
}: BeykentDropdownProps) {
  return (
    <select
      value={value}
      onChange={e => onChange?.(e.target.value)}
      className={`w-full bg-white rounded-[20px] px-3 sm:px-4 py-2 sm:py-3 text-black text-xs sm:text-sm h-10 sm:h-[52px] outline-none cursor-pointer ${className}`}
      style={{ fontFamily: 'Roboto' }}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
