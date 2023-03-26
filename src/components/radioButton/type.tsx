export interface RadioButtonProp {
  classes?: string;
  legend: string;
  options?: string[];
  required?: boolean;
  currentRef?: React.RefObject<HTMLInputElement>;
}
