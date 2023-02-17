import { useState } from 'react';
import './Form.scss';

export const Form = () => {
  // State for the firstname value
  const [firstName, setFirstName] = useState('');

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <div>
      <form className='form'>
        <div className='form-control'>
          <input
            type='text'
            className='input'
            name='firstname'
            placeholder='First Name'
            // value={firstName}
            // onChange={firstNameHandler}
          />
        </div>
        <div className='form-control'>
          <input
            type='text'
            className='input'
            name='lastname'
            placeholder='Last Name'
            // value={firstName}
            // onChange={firstNameHandler}
          />
        </div>
        <div className='form-control'>
          <input
            type='email'
            className='input'
            name='email'
            placeholder='Email Address'
            // value={firstName}
            // onChange={firstNameHandler}
          />
        </div>
        <div className='form-control'>
          <input
            type='password'
            className='input'
            name='password'
            placeholder='Password'
            // value={firstName}
            // onChange={firstNameHandler}
          />
        </div>
        <button className='btn--submit'>Claim your free trial</button>
        <p className='terms-agreement'>
          By clicking the button, you are agreeing to our{' '}
          <strong> Terms and Services</strong>
        </p>
      </form>
    </div>
  );
};
