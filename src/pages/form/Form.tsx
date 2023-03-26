import React, { Component, FormEvent } from 'react';
import { FormProp } from './type';
import { countries } from '../../data/countries';
import RadioButton from '../../components/radioButton/RadioButton';
import Input from '../../components/input/Input';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import './Form.scss';

class Form extends Component<FormProp> {
  render() {
    const { classes } = this.props;
    const onSubmit = async (e: FormEvent) => {
      e.preventDefault();
    };

    return (
      <main className="main">
        <form className={`form ${classes}`} onSubmit={onSubmit}>
          <Input
            type="text"
            label="Name and surname"
            placeholder="Enter name, surname"
            id="name"
            required={true}
          />
          <Input type="date" label="Your birthday" id="date" required={true} />
          <Select options={countries} label="Country" id="countries" defaultValue={countries[15]} />
          <RadioButton legend="Gender" options={['man', 'woman']} required={true} />
          <Input
            type="file"
            label="Profile picture"
            id="avatar"
            classes="input-file"
            required={true}
          />
          <Input
            type="checkbox"
            classes="input-checkbox"
            label="I agree to the Privacy Policy"
            id="policy"
            required={true}
            fieldsetClasses="checkbox-fieldset"
            labelClasses="label-checkbox"
          />
          <Input
            type="checkbox"
            classes="input-checkbox"
            label="Select this box to receive updates and marketing."
            id="marketing"
            fieldsetClasses="checkbox-fieldset"
            labelClasses="label-checkbox"
          />
          <Button btnText="submit" />
        </form>
      </main>
    );
  }
}

export default Form;
