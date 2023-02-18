import { useState } from 'react';
import './Form.scss';

export const Form = () => {
  // State for the firstname value
  const [firstName, setFirstName] = useState('');
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isFirstNameValid = firstName.trim() !== '';
  const firstNameInputValid = !isFirstNameValid && isFirstNameTouched;

  const isEmailValid = email.includes('@');
  const emailInputValid = !isEmailValid && isEmailTouched;

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const firstNameBlurHandler = () => {
    setIsFirstNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    setIsEmailTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setIsFirstNameTouched(true);
    setIsEmailTouched(true);

    if (!isFirstNameValid && !isEmailValid) {
      return;
    }

    console.log(firstName);
    setFirstName('');
    setIsFirstNameTouched(false);

    setEmail('');
    setIsEmailTouched(false);
  };

  const firstNameClasses = firstNameInputValid
    ? 'input-control input-control__invalid'
    : 'input-control';

  const emailClasses = emailInputValid
    ? 'input-control input-control__invalid email-invalid'
    : 'input-control';

  return (
    <div>
      <form className='form' onSubmit={submitHandler} noValidate>
        <div className='form-control'>
          <div className={firstNameClasses}>
            <input
              type='text'
              className='input'
              name='firstname'
              placeholder={firstNameInputValid ? '' : 'First Name'}
              value={firstName}
              onChange={firstNameHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameInputValid && (
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fillRule='evenodd'>
                  <circle fill='#FF7979' cx='12' cy='12' r='12' />
                  <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
                  <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
                </g>
              </svg>
            )}
          </div>
          {firstNameInputValid && (
            <p className='invalid-message'>First Name cannot be empty</p>
          )}
        </div>
        <div className='form-control'>
          <div className={emailClasses}>
            <input
              type='email'
              className='input'
              name='email'
              placeholder={
                emailInputValid ? 'email@example/com' : 'Email Address'
              }
              value={email}
              onChange={emailInputHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailInputValid && (
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fillRule='evenodd'>
                  <circle fill='#FF7979' cx='12' cy='12' r='12' />
                  <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
                  <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
                </g>
              </svg>
            )}
          </div>
          {emailInputValid && (
            <p className='invalid-message'>Looks like this is not an email</p>
          )}
        </div>
        {/* <div className='form-control'>
          <div className='input-control'>
            <input
              type='text'
              className='input'
              name='lastname'
              placeholder='Last Name'
              // value={firstName}
              // onChange={firstNameHandler}
            />
            {!isFirstNameValid && (
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fillRule='evenodd'>
                  <circle fill='#FF7979' cx='12' cy='12' r='12' />
                  <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
                  <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
                </g>
              </svg>
            )}
          </div>
          {!isFirstNameValid && (
            <p className='invalid-message'>Last Name cannot be empty</p>
          )}
        </div>
        <div className='form-control'>
          <div className='input-control'>
            <input
              type='email'
              className='input'
              name='email'
              placeholder='Email Address'
              // value={firstName}
              // onChange={firstNameHandler}
            />
            {!isFirstNameValid && (
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fillRule='evenodd'>
                  <circle fill='#FF7979' cx='12' cy='12' r='12' />
                  <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
                  <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
                </g>
              </svg>
            )}
          </div>
          {!isFirstNameValid && (
            <p className='invalid-message'>Looks like this is not an email</p>
          )}
        </div>
        <div className='form-control'>
          <div className='input-control'>
            <input
              type='password'
              className='input'
              name='password'
              placeholder='Password'
              // value={firstName}
              // onChange={firstNameHandler}
            />
            {!isFirstNameValid && (
              <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fillRule='evenodd'>
                  <circle fill='#FF7979' cx='12' cy='12' r='12' />
                  <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
                  <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
                </g>
              </svg>
            )}
          </div>
          {!isFirstNameValid && (
            <p className='invalid-message'>Password cannot be empty</p>
          )}
        </div> */}

        <button className='btn--submit'>Claim your free trial</button>
        <p className='terms-agreement'>
          By clicking the button, you are agreeing to our{' '}
          <strong> Terms and Services</strong>
        </p>
      </form>
    </div>
  );
};
