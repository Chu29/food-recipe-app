const FormField = ({
  label,
  className = "",
  labelClassName = "",
  children,
}) => {
  return (
    <label className={`mb-4 block ${className}`.trim()}>
      <span
        className={`block text-sm font-medium text-gray-300 ${labelClassName}`.trim()}
      >
        {label}
      </span>
      {children}
    </label>
  );
};

export default FormField;
