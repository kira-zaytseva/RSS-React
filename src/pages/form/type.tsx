import { ProfileProp } from '../../components/profile/type';

export interface FormProp {
  classes?: string;
}

export const enum Errors {
  nameError = 'At least two words, the name must be at least three characters long.',
  birthdayError = 'Wrong date of birth entered',
}

export interface State {
  errors: {
    nameErr: Errors.nameError | string;
    birthdayErr: Errors.birthdayError | string;
  };
  cards: ProfileProp[];
  userPhoto: string;
}
