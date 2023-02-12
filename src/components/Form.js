import { useState } from 'react';
import { Card } from '../UI/Card';
import './Form.css';
import { Input } from './Input';
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
          {/* TODO INPUT FIELD -- SHOULD I LIFT THE STATE? */}
          <Input firstName={firstName} firstNameHandler={firstNameHandler} />
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
