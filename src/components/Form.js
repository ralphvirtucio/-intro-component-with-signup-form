import { Card } from '../UI/Card';
import './Form.css';
export const Form = () => {
  return (
    <>
      <Card classname='form'>
        <form>
          <div className='form-control'>
            <input type='text' name='firstname' placeholder='First Name' />
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
