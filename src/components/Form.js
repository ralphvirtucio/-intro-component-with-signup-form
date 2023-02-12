import { useState } from 'react';
import { Card } from '../UI/Card';
import './Form.css';
import { Input } from './Input';
export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    setIsEmpty(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName === '') {
      setIsEmpty(true);
    }

    // Validation of input fields
  };

  return (
    <>
      <Card classname='form'>
        <form onSubmit={submitHandler}>
          {/* TODO INPUT FIELD -- SHOULD I LIFT THE STATE? */}
          <Input
            firstName={firstName}
            firstNameHandler={firstNameHandler}
            isEmpty={isEmpty}
          />
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
