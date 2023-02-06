import './App.css';
import { Content } from './components/content/Content';
import { Form } from './components/form/Form';

function App() {
  return (
    <div className='main'>
      <Content />
      <div className='form'>
        <div className='pricing__plan'>
          <p>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
