import HelloWorld from './HelloWorld';
import './App.css';
import Greet from './Greet';
import Message from './Message';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
       <HelloWorld greeting="Good Morning"/>
      <Greet name="Batman"/>
      <Greet name="Superman"/>
      <Message />
      <Counter/>
    </div>
  );
}

export default App;
