import { useState } from 'react';
import './Input.css';
export const Input = ({ firstName, firstNameHandler, isEmpty }) => {
  return (
    <div className='container__input'>
      <div className='form-control'>
        <input
          type='text'
          name='firstname'
          placeholder='First Name'
          value={firstName}
          onChange={firstNameHandler}
        />
        {isEmpty && (
          <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <circle fill='#FF7979' cx='12' cy='12' r='12' />
              <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
              <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
            </g>
          </svg>
        )}
        {/* <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fill-rule='evenodd'>
            <circle fill='#FF7979' cx='12' cy='12' r='12' />
            <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
            <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
          </g>
        </svg> */}
      </div>
      {isEmpty && <p className='error-message'>First Name cannot be empty</p>}
      {/* <p className='error-message'>First Name cannot be empty</p> */}
    </div>
  );
};
