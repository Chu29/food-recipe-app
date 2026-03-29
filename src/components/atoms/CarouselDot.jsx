const CarouselDot = ({ isActive, onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-1.5 w-1.5 rounded-full ${
        isActive ? "bg-orange-400" : "bg-gray-300/70"
      }`}
      aria-label={ariaLabel}
    />
  );
};

export default CarouselDot;
