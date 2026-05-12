import { X } from "lucide-react";
import { Button } from "../atoms";

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <Button
        type="button"
        variant="icon"
        size="icon"
        onClick={onClose}
        aria-label="Close modal"
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ModalHeader;
