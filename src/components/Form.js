import { Card } from './UI/Card';
import './Form.scss';
import { useState } from 'react';
import { Input } from './Input';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const firstNameHandler = (e) => {
    if (firstName.trim().length > 0) {
      setIsValid(true);
    }
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    if (lastName.trim().length > 0) {
      setIsValid(true);
    }
    setLastName(e.target.value);
  };
  const emailHandler = (e) => {
    if (email.trim().length > 0) {
      setIsValid(true);
    }
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    if (password.trim().length > 0) {
      setIsValid(true);
    }
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      firstName.trim().length === 0 &&
      lastName.trim().length === 0 &&
      email.trim().length === 0 &&
      password.trim().length === 0
    ) {
      setIsValid(false);
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  // const retrieveData = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <Card classes='form'>
        <form className='signup-form' onSubmit={submitHandler}>
          <Input
            type='text'
            name='firstname'
            placeholder='First Name'
            // retrieveData={retrieveData}
            value={firstName}
            onchange={firstNameHandler}
            valid={isValid}
          />
          <Input
            type='text'
            name='lastname'
            placeholder='Last Name'
            value={lastName}
            onchange={lastNameHandler}
            valid={isValid}

            // retrieveData={retrieveData}
          />
          <Input
            type='email'
            name='email'
            placeholder='Email Address'
            value={email}
            onchange={emailHandler}
            valid={isValid}

            // retrieveData={retrieveData}
          />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onchange={passwordHandler}
            valid={isValid}

            // retrieveData={retrieveData}
          />
          <button type='submit'>Claim your free trial</button>
          <p className='terms-services'>
            By clicking the button, you are agreeing to our{' '}
            <span>
              <strong>Terms and Services</strong>
            </span>
          </p>
        </form>
      </Card>
    </>
  );
};
