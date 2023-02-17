import { Card } from './UI/Card';
import './Form.scss';
// import { Input } from './Input';
import { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  const [lastName, setLastName] = useState('');
  const [isLastNameValid, setIsLastNameValid] = useState(true);

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const firstNameHandler = (e) => {
    if (e.target.value) {
      setIsFirstNameValid(true);
    }

    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    if (e.target.value) {
      setIsLastNameValid(true);
    }

    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    if (e.target.value) {
      setIsEmailValid(true);
    }

    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    if (e.target.value) {
      setIsPasswordValid(true);
    }

    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName.trim() === '') {
      setIsFirstNameValid(false);
    }
    if (lastName.trim() === '') {
      setIsLastNameValid(false);
    }

    if (password.trim() === '') {
      setIsPasswordValid(false);
    }

    if (!email.includes('@')) {
      setIsEmailValid(false);
    } else {
      setEmail('');
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isEmailValid ||
      !isPasswordValid
    ) {
      setFirstName('');
      setLastName('');
      setPassword('');
    }
  };

  const firstNameClasses = !isFirstNameValid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = !isLastNameValid
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = !isEmailValid
    ? 'form-control invalid invalid-email'
    : 'form-control';

  const passwordClasses = !isPasswordValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <>
      <Card classes='form'>
        <form className='signup-form' onSubmit={submitHandler} noValidate>
          <div className='form-control-container'>
            <div className={firstNameClasses}>
              <input
                type='text'
                name='firstName'
                placeholder={!isFirstNameValid ? '' : 'First Name'}
                value={firstName}
                onChange={firstNameHandler}
              />
              {!isFirstNameValid && (
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fillRule='evenodd'>
                    <circle fill='#FF7979' cx='12' cy='12' r='12' />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='6'
                      width='2'
                      height='9'
                      rx='1'
                    />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='17'
                      width='2'
                      height='2'
                      rx='1'
                    />
                  </g>
                </svg>
              )}
            </div>
            {!isFirstNameValid && (
              <p className='invalid-input'>First Name cannot be empty</p>
            )}
          </div>

          <div className='form-control-container'>
            <div className={lastNameClasses}>
              <input
                type='text'
                name='lastName'
                placeholder={!isLastNameValid ? '' : 'Last Name'}
                value={lastName}
                onChange={lastNameHandler}
              />
              {!isLastNameValid && (
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fillRule='evenodd'>
                    <circle fill='#FF7979' cx='12' cy='12' r='12' />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='6'
                      width='2'
                      height='9'
                      rx='1'
                    />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='17'
                      width='2'
                      height='2'
                      rx='1'
                    />
                  </g>
                </svg>
              )}
            </div>
            {!isLastNameValid && (
              <p className='invalid-input'>Last Name cannot be empty</p>
            )}
          </div>

          <div className='form-control-container'>
            <div className={emailClasses}>
              <input
                type='email'
                name='email'
                placeholder={!isEmailValid ? email : 'Email Address'}
                value={email}
                onChange={emailHandler}
              />
              {!isEmailValid && (
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fillRule='evenodd'>
                    <circle fill='#FF7979' cx='12' cy='12' r='12' />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='6'
                      width='2'
                      height='9'
                      rx='1'
                    />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='17'
                      width='2'
                      height='2'
                      rx='1'
                    />
                  </g>
                </svg>
              )}
            </div>
            {!isEmailValid && (
              <p className='invalid-input'>Looks like this is not an email</p>
            )}
          </div>

          <div className='form-control-container'>
            <div className={passwordClasses}>
              <input
                type='password'
                name='password'
                placeholder={!isPasswordValid ? '' : 'Password'}
                value={password}
                onChange={passwordHandler}
              />
              {!isPasswordValid && (
                <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fillRule='evenodd'>
                    <circle fill='#FF7979' cx='12' cy='12' r='12' />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='6'
                      width='2'
                      height='9'
                      rx='1'
                    />
                    <rect
                      fill='#FFF'
                      x='11'
                      y='17'
                      width='2'
                      height='2'
                      rx='1'
                    />
                  </g>
                </svg>
              )}
            </div>
            {!isPasswordValid && (
              <p className='invalid-input'>Password cannot be empty</p>
            )}
          </div>

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
