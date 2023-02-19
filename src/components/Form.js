import { useInput } from './hooks/useInput';
import './Form.scss';
import { Input } from './Input';

export const Form = () => {
  const [
    enteredFirstName,
    isValidFirstName,
    invalidFirstName,
    onFirstNameChange,
    onFirstNameBlur,
    resetFirstNameInput,
    resetIsFirstNameTouch,
  ] = useInput((enteredFirstName) => enteredFirstName.trim() !== '');

  const [
    enteredLastName,
    isValidLastName,
    invalidLastName,
    onLastNameChange,
    onLastNameBlur,
    resetLastNameInput,
    resetIsLastNameTouch,
  ] = useInput((enteredLastName) => enteredLastName.trim() !== '');

  const [
    enteredEmail,
    isValidEmail,
    invalidEmail,
    onEmailChange,
    onEmailBlur,
    resetEmailInput,
    resetIsEmailTouch,
  ] = useInput(
    (enteredEmail) =>
      enteredEmail.includes('@') &&
      enteredEmail.length > 3 &&
      !enteredEmail.startsWith('@')
  );

  const [
    enteredPassword,
    isValidPassword,
    invalidPassword,
    onPasswordChange,
    onPasswordBlur,
    resetPasswordInput,
    resetIsPasswordTouch,
  ] = useInput((enteredPassword) => enteredPassword.trim() !== '');

  let invalidPasswordMsg = 'Password cannot be empty';
  const submitHandler = (e) => {
    e.preventDefault();

    resetIsFirstNameTouch();
    resetIsLastNameTouch();
    resetIsEmailTouch();
    resetIsPasswordTouch();

    if (
      !isValidFirstName &&
      !isValidLastName &&
      !isValidEmail &&
      !isValidPassword
    ) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  const firstNameClasses = invalidFirstName
    ? 'input-control input-control__invalid'
    : 'input-control';

  const lastNameClasses = invalidLastName
    ? 'input-control input-control__invalid'
    : 'input-control';

  const emailClasses = invalidEmail
    ? 'input-control input-control__invalid email-invalid'
    : 'input-control';

  const passwordClasses = invalidPassword
    ? 'input-control input-control__invalid'
    : 'input-control';

  return (
    <div>
      <form className='form' onSubmit={submitHandler} noValidate>
        <Input
          type='text'
          name='firstname'
          placeholder='First Name'
          invalidMsg='First Name cannot be empty'
          enteredValue={enteredFirstName}
          onChange={onFirstNameChange}
          onBlur={onFirstNameBlur}
          invalidValue={invalidFirstName}
          inputClass={firstNameClasses}
        />
        <Input
          type='text'
          name='lastname'
          placeholder='Last Name'
          invalidMsg='Last Name cannot be empty'
          enteredValue={enteredLastName}
          onChange={onLastNameChange}
          onBlur={onLastNameBlur}
          invalidValue={invalidLastName}
          inputClass={lastNameClasses}
        />
        <Input
          type='email'
          name='email'
          placeholder='Email Address'
          invalidMsg='Looks like this is not an email'
          enteredValue={enteredEmail}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          invalidValue={invalidEmail}
          inputClass={emailClasses}
          invalidPlaceholder={enteredEmail}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          invalidMsg={invalidPasswordMsg}
          enteredValue={enteredPassword}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          invalidValue={invalidPassword}
          inputClass={passwordClasses}
        />

        <button className='btn--submit'>Claim your free trial</button>
        <p className='terms-agreement'>
          By clicking the button, you are agreeing to our{' '}
          <strong> Terms and Services</strong>
        </p>
      </form>
    </div>
  );
};
