import { useState } from 'react';
import './Input.scss';

export const Input = (props) => {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [props.isValid, setprops.isValid] = useState(true);

  // const onChangeHandler = (e) => {
  //   setEnteredValue(e.target.value);
  // };

  return (
    <>
      <div className='form-control-container'>
        <div className={`form-control ${!props.isValid ? 'invalid' : ''}`}>
          <input
            type={props.type}
            name={props.name}
            placeholder={`${!props.isValid ? '' : props.placeholder}`}
            // value={enteredValue}
            // onChange={onChangeHandler}
            value={props.value}
            onChange={props.onChange}
          />
          {!props.isValid && (
            <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <circle fill='#FF7979' cx='12' cy='12' r='12' />
                <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
                <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
              </g>
            </svg>
          )}
        </div>
        {!props.isValid && (
          <p className='invalid-input'>{`${props.placeholder} cannot be empty`}</p>
        )}
      </div>
    </>
  );
};
