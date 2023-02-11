import './App.css';
import { CallToAction } from './components/CallToAction';

const App = () => {
  return (
    <>
      <main className='signup'>
        <section className='signup__content'>
          <h1 className='main-heading'>Learn to code by watching others</h1>
          <p className='signup__message'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </section>
        <CallToAction />
      </main>
    </>
  );
};

export default App;
