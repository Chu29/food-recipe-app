const TextInput = ({ className = "", ...props }) => {
  return (
    <input
      className={`mt-2 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`.trim()}
      {...props}
    />
  );
};

export default TextInput;
