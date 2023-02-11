import { Card } from '../UI/Card';
import './CallToAction.css';
import { Form } from './Form';

export const CallToAction = () => {
  return (
    <div className='signup__form'>
      <Card classname='promo'>
        <p className='promo__description'>
          <strong>Try it free 7 days</strong> then $ 20/mo. thereafter
        </p>
      </Card>
      <Form />
    </div>
  );
};
