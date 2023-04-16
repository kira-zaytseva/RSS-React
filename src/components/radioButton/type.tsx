import { FormFields } from '../../pages/form/type';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface RadioButtonProp {
  classes?: string;
  legend: string;
  name: keyof FormFields;
  options?: string[];
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<FormFields>;
  rules: RegisterOptions<FormFields, keyof FormFields>;
}
