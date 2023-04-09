import { ForwardedRef } from 'react';

export interface InputProp {
  classes?: string;
  type: string;
  placeholder?: string;
  id?: string;
  options?: string[];
  required?: boolean;
  fieldsetClasses?: string;
  labelClasses?: string;
  error?: string;
  currentRef?: ForwardedRef<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
