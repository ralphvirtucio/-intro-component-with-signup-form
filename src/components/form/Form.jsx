import { Input } from '../Input/Input';
import './Form.css';

export const Form = () => {
  return (
    <form className='signup' autoComplete='off'>
      <Input
        className='input-field'
        type='text'
        name='firstname'
        placeholder='First Name'
      />
      <Input
        className='input-field'
        type='text'
        name='lastname'
        placeholder='Last Name'
      />
      <Input
        className='input-field'
        type='email'
        name='email'
        placeholder='Email Address'
      />
      <Input
        className='input-field'
        type='password'
        name='password'
        placeholder='Password'
      />
      <input
        className='input-submit'
        type='submit'
        value='CLAIM YOUR FREE TRIAL'
      />
      {/* <Input
        className='input-submit'
        type='submit'
        value='CLAIM YOUR FREE TRIAL'
      /> */}
      <p className='terms-services'>
        By clicking the button, you are agreeing to our{' '}
        <span>Terms and Services</span>
      </p>
    </form>
  );
};
