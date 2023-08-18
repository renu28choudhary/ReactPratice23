import HelloWorld from './HelloWorld';
import './App.css';
import Greet from './Greet';
import Message from './Message';
import Counter from './Counter';
import EventBindClass from './EventBindClass';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';
import EmployeeList from './EmployeeList';

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
      <UserGreeting/>
      <NameList/>
      <EmployeeList/>
    </div>
  );
}

export default App;
