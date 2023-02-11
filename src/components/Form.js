import { useState } from 'react';
import { Card } from '../UI/Card';
import './Form.css';
export const Form = () => {
  const [firstName, setFirstName] = useState('');

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // let obj = {
    //   firstName,
    // };

    // Validation of input fields
  };

  return (
    <>
      <Card classname='form'>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <input
              type='text'
              name='firstname'
              placeholder='First Name'
              value={firstName}
              onChange={firstNameHandler}
            />
          </div>
          <button type='submit' className='btn--submit'>
            Claim your free trial
          </button>
          <p className='terms'>
            By clicking the button, you are agreeing to our{' '}
            <span>Terms and Services</span>
          </p>
        </form>
      </Card>
    </>
  );
};
