import React, { Component, createRef, FormEvent } from 'react';
import { Errors, FormProp, State } from './type';
import { countries } from '../../data/countries';
import RadioButton from '../../components/radioButton/RadioButton';
import Input from '../../components/input/Input';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import { validateBirthday, validateName } from '../../utils/validation';
import Profile from '../../components/profile/Profile';
import { ProfileProp } from '../../components/profile/type';
import './Form.scss';

class Form extends Component<FormProp, State> {
  userName = createRef<HTMLInputElement>();
  birthday = createRef<HTMLInputElement>();
  country = createRef<HTMLSelectElement>();
  gender = createRef<HTMLInputElement>();
  avatar = createRef<HTMLInputElement>();
  policy = createRef<HTMLInputElement>();
  marketing = createRef<HTMLInputElement>();

  initialErrors = {
    nameErr: '',
    birthdayErr: '',
  };

  state = {
    errors: { ...this.initialErrors },
    cards: [],
    userPhoto: '',
  };

  uploadFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target!.files![0];
    if (file) {
      const image = URL.createObjectURL(file);
      this.setState({ userPhoto: image });
    }
  };

  onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isValidName = validateName(this.userName.current?.value || '');
    const isValidBirthday = validateBirthday(this.birthday.current?.value || '');

    if (!isValidName) {
      this.setState({
        errors: { nameErr: Errors.nameError, birthdayErr: this.state.errors.birthdayErr },
      });
    } else this.setState({ errors: { nameErr: '', birthdayErr: this.state.errors.birthdayErr } });

    if (!isValidBirthday) {
      this.setState({
        errors: { nameErr: this.state.errors.nameErr, birthdayErr: Errors.birthdayError },
      });
    } else this.setState({ errors: { nameErr: this.state.errors.nameErr, birthdayErr: '' } });

    let fileInput = '';

    if (this.avatar.current?.files?.length) {
      fileInput = URL.createObjectURL(this.avatar.current?.files[0]);
    }

    if (isValidBirthday) {
      console.log(this.gender);
      this.setState({
        cards: [
          ...this.state.cards,
          {
            userName: this.userName.current?.value || '',
            birthday: this.birthday.current?.value || '',
            country: this.country.current?.value || '',
            gender: this.gender.current?.checked || false,
            avatar: fileInput || '',
            policy: this.policy.current?.checked || true,
            marketing: this.marketing.current?.checked || false,
          },
        ],
      });
      console.log(this.gender);
      (e.target as HTMLFormElement).reset();
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <main className="main">
        <form className={`form ${classes}`} onSubmit={this.onSubmit} data-testid="Form">
          <Input
            type="text"
            label="Name and surname"
            placeholder="Enter name, surname"
            id="name"
            required={true}
            currentRef={this.userName}
            error={this.state.errors.nameErr}
          />
          <Input
            type="date"
            label="Your birthday"
            id="date"
            required={true}
            currentRef={this.birthday}
            error={this.state.errors.birthdayErr}
          />
          <Select
            options={countries}
            label="Country"
            id="countries"
            defaultValue={countries[15]}
            currentRef={this.country}
          />
          <RadioButton
            legend="Gender"
            options={['Man', 'Woman']}
            required={true}
            currentRef={this.gender}
          />
          <Input
            type="file"
            label="Profile picture"
            id="avatar"
            classes="input-file"
            required={true}
            currentRef={this.avatar}
          />
          <Input
            type="checkbox"
            classes="input-checkbox"
            label="I agree to the Privacy Policy"
            id="policy"
            required={true}
            fieldsetClasses="checkbox-fieldset"
            labelClasses="label-checkbox"
            currentRef={this.policy}
          />
          <Input
            type="checkbox"
            classes="input-checkbox"
            label="Select this box to receive updates and marketing."
            id="marketing"
            fieldsetClasses="checkbox-fieldset"
            labelClasses="label-checkbox"
            currentRef={this.marketing}
          />
          <Button btnText="submit" />
        </form>
        {this.state.cards.map((el: ProfileProp, index: number) => (
          <Profile
            key={index}
            userName={el.userName}
            birthday={el.birthday}
            country={el.country}
            gender={el.gender}
            avatar={el.avatar}
            policy={el.policy}
            marketing={el.marketing}
          />
        ))}
      </main>
    );
  }
}

export default Form;
