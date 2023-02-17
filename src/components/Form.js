export const Form = () => {
  return (
    <div>
      <form>
        <div className='form-control'>
          <input type='text' name='firstname' placeholder='First Name' />
        </div>
        <button className='btn--submit'>Claim your free trial</button>
        <p className='terms-agreement'>
          By clicking the button, you are agreeing to our{' '}
          <strong>Terms and Services</strong>
        </p>
      </form>
    </div>
  );
};
