//import logo from './logo.svg';
import './App.css';
import Address from './Components/Address';
import Subjects from './Components/Subjects'
import Information from './Components/Information';
import Addition from './Components/Addition';
import Trainer from './Components/Trainer';

function App() {
  let c = 10+30;
  let d = 40 + 50;


  return (
    <>
    <Information/>
    <br/>
    <Address/>
    <br/>
    <br/>
    <br/>
    <Subjects/>
  <br/>
  <br/>
  <br/>
  <Addition/>
  <Trainer/>
    </>
  );
}

export default App;
