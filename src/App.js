import './App.scss';
import { Form } from './components/Form';
import { Card } from './components/UI/Card';

const App = () => {
  return (
    <>
      <main>
        <section className='intro__content'>
          <h1 className='intro__heading'>Learn to code by watching others</h1>
          <p className='intro__message'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </section>
        <section className='signup__content'>
          <Card classes='pricing'>
            <p>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
          </Card>
          <Form />
        </section>
      </main>
    </>
  );
};

export default App;
