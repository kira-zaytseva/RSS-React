export interface SelectProp {
  classes?: string;
  options: string[];
  id: string;
  label: string;
  name?: string;
  defaultValue?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
