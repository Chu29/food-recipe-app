const MealTextSection = ({ title, items, ordered = false, emptyMessage }) => {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <section>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {items.length > 0 ? (
        <ListTag
          className={`mt-3 space-y-2 text-gray-300 ${
            ordered ? "list-decimal pl-5" : ""
          }`}
        >
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>{ordered ? item : `- ${item}`}</li>
          ))}
        </ListTag>
      ) : (
        <p className="mt-3 text-gray-400">{emptyMessage}</p>
      )}
    </section>
  );
};

export default MealTextSection;
