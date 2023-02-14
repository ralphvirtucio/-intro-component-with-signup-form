import { Card } from './UI/Card';
import './Form.scss';
import { useState } from 'react';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const firstNameHandler = (e) => {
    if (firstName.trim().length > 0) {
      setIsValid(true);
    }

    setFirstName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName.trim().length === 0) {
      setIsValid(false);
    }

    setFirstName('');
  };

  return (
    <>
      <Card classes='form'>
        <form className='signup-form' onSubmit={submitHandler}>
          <div className='form-control-container'>
            <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
              <input
                type='text'
                name='firstname'
                id='firstname'
                placeholder={`${!isValid ? '' : 'First Name'}`}
                value={firstName}
                onChange={firstNameHandler}
              />
              {!isValid && (
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
            {!isValid && (
              <p className='invalid-input'>First Name cannot be empty</p>
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
