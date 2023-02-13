import { Card } from './UI/Card';
import './Form.scss';
import { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <>
      <Card classes='form'>
        <form className='signup-form'>
          <div className='form-control'>
            <input
              type='text'
              name='firstname'
              id='firstname'
              placeholder='First Name'
              value={firstName}
              onChange={firstNameHandler}
            />
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
