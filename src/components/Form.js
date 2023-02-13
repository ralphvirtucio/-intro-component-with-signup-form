import { Card } from './UI/Card';

export const Form = () => {
  return (
    <Card>
      <form className='signup-form'>
        <div className='form-control'>
          <input type='text' name='firstname' id='firstname' />
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
  );
};
