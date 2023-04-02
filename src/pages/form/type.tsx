import { ProfileProp } from '../../components/profile/type';

export interface FormProp {
  classes?: string;
}

export interface FormFields extends Omit<ProfileProp, 'avatar'> {
  avatar: File[];
}
