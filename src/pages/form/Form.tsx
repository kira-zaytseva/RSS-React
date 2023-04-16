import React, { useState } from 'react';
import { ERROR_MESSAGE, FormFields, FormProp } from './type';
import { countries } from '../../data/countries';
import RadioButton from '../../components/radioButton/RadioButton';
import Select from '../../components/select/Select';
import Button from '../../components/button/Button';
import Profile from '../../components/profile/Profile';
import { ProfileProp } from '../../components/profile/type';
import FormField from '../../components/formField/FormField';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import './Form.scss';

const Form = ({ classes }: FormProp) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  // const [cards, setCards] = useState<ProfileProp[] | []>([]);
  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const { cards } = useAppSelector((state) => state.userReducer);

  const hideMessage = () => {
    setTimeout(() => {
      setIsActiveMessage(false);
    }, 2000);
  };

  const onSubmit = (data: FormFields) => {
    const { avatar, ...rest } = data;
    try {
      const fileInput = URL.createObjectURL(avatar[0]);
      dispatch(
        userSlice.actions.submitProfile({
          avatar: fileInput,
          ...rest,
        })
      );
      setIsActiveMessage(true);
      reset();
      hideMessage();
    } catch (error) {
      setError('avatar', { type: 'custom', message: 'Invalid image' });
    }
  };
  return (
    <main className="main">
      <form className={`form ${classes}`} onSubmit={handleSubmit(onSubmit)} data-testid="Form">
        {isActiveMessage && <p className="submit-message">Information has been submitted</p>}
        <FormField
          type="text"
          label="User name"
          placeholder="Enter your username"
          id="name"
          {...register('userName', {
            required: ERROR_MESSAGE.IS_REQUIRED,
            minLength: { value: 3, message: ERROR_MESSAGE.TOO_SHORT },
          })}
          error={errors.userName?.message}
        />
        <FormField
          type="date"
          label="Your birthday"
          id="date"
          {...register('birthday', {
            required: ERROR_MESSAGE.IS_REQUIRED,
            pattern: {
              value: /^(200[0-5]|19[0-9][0-9])-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/gm,
              message: 'You are too young or too old',
            },
          })}
          error={errors.birthday?.message}
        />
        <Select
          options={countries}
          label="Country"
          id="countries"
          {...register('country', {
            required: ERROR_MESSAGE.IS_REQUIRED,
          })}
          error={errors.country?.message}
        />
        <RadioButton
          legend="Gender"
          options={['Man', 'Woman']}
          register={register}
          name="gender"
          rules={{ required: ERROR_MESSAGE.IS_REQUIRED }}
          error={errors.gender?.message}
        />
        <FormField
          type="file"
          label="Profile picture"
          id="avatar"
          classes="input-file"
          {...register('avatar', {
            required: ERROR_MESSAGE.IS_REQUIRED,
          })}
          error={errors.avatar?.message}
        />
        <FormField
          type="checkbox"
          classes="input-checkbox"
          label="I agree to the Privacy Policy"
          id="policy"
          fieldsetClasses="checkbox-fieldset"
          labelClasses="label-checkbox"
          {...register('policy', {
            required: ERROR_MESSAGE.IS_REQUIRED,
          })}
          error={errors.policy?.message}
        />
        <FormField
          type="checkbox"
          classes="input-checkbox"
          label="Select this box to receive updates and marketing."
          id="marketing"
          fieldsetClasses="checkbox-fieldset"
          labelClasses="label-checkbox"
          {...register('marketing')}
        />
        <Button btnText="submit" />
      </form>
      <section className="profile-list">
        {cards.map((el: ProfileProp, index: number) => (
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
      </section>
    </main>
  );
};

export default Form;
