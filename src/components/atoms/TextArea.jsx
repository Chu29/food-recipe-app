const TextArea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={`mt-2 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y ${className}`.trim()}
      {...props}
    />
  );
};

export default TextArea;
