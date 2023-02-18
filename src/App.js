import './App.scss';
import { Form } from './components/Form';

const App = () => {
  return (
    <div>
      <main className='main'>
        <div className='left-content'>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers take problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className='right-content'>
          <div className='pricing'>
            <p>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
          </div>
          <Form />
        </div>
      </main>
    </div>
  );
};

export default App;
