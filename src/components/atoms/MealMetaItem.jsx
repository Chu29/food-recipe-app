const MealMetaItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
};

export default MealMetaItem;
