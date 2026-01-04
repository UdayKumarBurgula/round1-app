import logo from './logo.svg';
import './App.css';
import OTPValidation from './components/OTPValidation';
import Progressbar from './components/Progressbar';
import ProgressbarMultiple from './components/ProgressbarMultiple';

function App() {
    const bars = [1, 10, 20, 50, 70];
    
  return (
    <div className="App">
          <h1>Learning React</h1>
          {/*<section>*/}
          {/*    <h2>OTP Validation Component</h2>*/}
          {/*    <OTPValidation></OTPValidation>  */}
          {/*</section>*/}
          <section>
              <h2>ProgressBar</h2>
              <Progressbar progress={70}></Progressbar>
              <br></br>
              <ProgressbarMultiple progresses={bars}></ProgressbarMultiple>
          </section>

    </div>
  );
}

export default App;
