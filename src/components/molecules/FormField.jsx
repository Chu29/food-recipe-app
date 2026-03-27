const FormField = ({ label, className = "", children }) => {
  return (
    <label
      className={`mb-4 block text-sm font-medium text-gray-300 ${className}`.trim()}
    >
      {label}
      {children}
    </label>
  );
};

export default FormField;
