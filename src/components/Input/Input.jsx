import { useState } from 'react';

export const Input = ({
  type,
  name,
  placeholder = '',
  className,
  // value = '',
}) => {
  // const [value, setValue] = useState('');

  return (
    <div className='form-control'>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        // value={value}
      />
    </div>
  );
};
