import clsx from "clsx";

interface FilterButtonProps {
  label: string;
  selected?: boolean;
  onClick: () => void;
  selectedColor?: string;
  className?: string;
}
function FilterButton({
  label,
  selected = false,
  onClick,
  selectedColor = "bg-blue-500",
  className,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-1.5 rounded-full text-sm font-medium",
        selected
          ? `${selectedColor} text-white`
          : "bg-gray-800 text-gray-300 hover:bg-gray-700",
        className
      )}
    >
      {label}
    </button>
  );
}

export default FilterButton;
