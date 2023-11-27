//import logo from './logo.svg';
import './App.css';
import Address from './Components/Address';
import Subjects from './Components/Subjects'
import Information from './Components/Information';

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
    <h1> The total is: {c}</h1>
    <h1> The total is : {d}</h1>
    </>
  );
}

export default App;
