import './Input.scss';

export const Input = ({
  type,
  name,
  placeholder,
  invalidMsg,
  enteredValue,
  onChange,
  onBlur,
  invalidValue,
  inputClass,
  invalidPlaceholder = '',
}) => {
  return (
    <div className='form-control'>
      <div className={inputClass}>
        <input
          type={type}
          name={name}
          placeholder={invalidValue ? invalidPlaceholder : placeholder}
          value={enteredValue}
          onChange={onChange}
          onBlur={onBlur}
        />
        {invalidValue && (
          <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <circle fill='#FF7979' cx='12' cy='12' r='12' />
              <rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
              <rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
            </g>
          </svg>
        )}
      </div>

      {invalidValue && <p className='invalid-message'>{invalidMsg}</p>}
    </div>
  );
};
