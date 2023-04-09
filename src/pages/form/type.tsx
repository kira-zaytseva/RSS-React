import { ProfileProp } from '../../components/profile/type';

export interface FormProp {
  classes?: string;
}

export interface FormFields extends Omit<ProfileProp, 'avatar'> {
  avatar: File[];
}

export const ERROR_MESSAGE = {
  IS_REQUIRED: 'Field is required',
  TOO_SHORT: 'Too short',
};
