export interface SelectProp {
  classes?: string;
  options: string[];
  id: string;
  label: string;
  defaultValue: string;
  currentRef?: React.RefObject<HTMLSelectElement>;
}
