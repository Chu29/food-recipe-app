import { Button } from "../atoms";

const FormActions = ({
  onCancel,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
}) => {
  return (
    <div className="flex items-center justify-end gap-3">
      <Button type="button" variant="secondary" onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button type="submit">{submitLabel}</Button>
    </div>
  );
};

export default FormActions;
