export interface InputProp {
  classes?: string;
  type: string;
  placeholder?: string;
  id: string;
  label: string;
  options?: string[];
  required?: boolean;
  fieldsetClasses?: string;
  labelClasses?: string;
  error?: string;
  currentRef?: React.RefObject<HTMLInputElement>;
}
