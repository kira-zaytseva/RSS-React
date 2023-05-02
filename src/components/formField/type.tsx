export interface FormFieldProp {
  classes?: string;
  type: string;
  placeholder?: string;
  id: string;
  label: string;
  options?: string[];
  fieldsetClasses?: string;
  labelClasses?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
