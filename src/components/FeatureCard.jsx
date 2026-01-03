const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
      <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4"></div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
