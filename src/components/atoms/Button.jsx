const VARIANT_STYLES = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl",
  secondary:
    "border border-gray-600 text-gray-200 hover:border-gray-500 hover:text-white",
  floating:
    "fixed bottom-8 right-8 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600",
  icon: "bg-gray-700/70 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full",
};

const SIZE_STYLES = {
  md: "px-6 py-3",
  lg: "px-10 py-4 text-lg",
  icon: "h-10 w-10",
  floating: "w-16 h-16",
};

const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const variantClass = VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary;
  const sizeClass = SIZE_STYLES[size] ?? SIZE_STYLES.md;

  return (
    <button
      type={type}
      className={`font-semibold rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
