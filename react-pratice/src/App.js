import HelloWorld from './HelloWorld';
import './App.css';
import Greet from './Greet';
import Message from './Message';
import Counter from './Counter';
import EventBindClass from './EventBindClass';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
       <HelloWorld greeting="Good Morning"/>
      <Greet name="Batman"/>
      <Greet name="Superman"/>
      <Message />
      <Counter/>
      <EventBindClass/>
      <ParentComponent/>
    </div>
  );
}

export default App;
