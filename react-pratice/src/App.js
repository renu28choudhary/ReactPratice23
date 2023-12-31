import HelloWorld from "./HelloWorld";
import "./App.css";
import Greet from "./Greet";
import Message from "./Message";
import Counter from "./Counter";
import EventBindClass from "./EventBindClass";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./UserGreeting";
import NameList from "./NameList";
import EmployeeList from "./EmployeeList";
import Stylesheet from "./Stylesheet";
import Form from "./Form";
import CalForm from "./CalForm";
import SignUpForm from "./SignUpForm";
import NamesLIst from "./NamesLIst";
import ShowNames from "./ShowNames";
import CounterApp from "./apps/CounterApp";
import TemperatureControlApp from "./apps/TemperatureControlApp";
import SearchFilter from "./apps/SearchFilter";
import RegisterForm from "./apps/RegisterForm";
import QuizApp from "./apps/QuizApp";
import NavBar from "./apps/NavBar";

function App() {
  return (
    <div className="App">
     {/* <HelloWorld greeting="Good Morning" />
      <Greet name="Batman" />
      <Greet name="Superman" />
      <Message />
      <Counter />
      <EventBindClass />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <EmployeeList />
      <Stylesheet primary={false} />
      <Form />
      <CalForm />
      <SignUpForm />
      <NamesLIst />
      <ShowNames />
      <CounterApp />
      <TemperatureControlApp />
      <SearchFilter />
      <RegisterForm />
  <QuizApp />*/}
  <NavBar/>
    </div>
  );
}

export default App;
