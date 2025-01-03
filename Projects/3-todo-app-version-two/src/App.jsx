import AppName from "./components/AppName";
import TodoName from "./components/TodoName";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "../src/App.css";
import Header from "./components/Header";
import Todoitem3 from "./components/Todoitem3";
import Todoitem4 from "./components/Todoitem4";
import Todoitem5 from "./components/Todoitem5";
import Footer from "./components/Footer";
import Text from "./components/Text";

function App() {
  return (
    <div class="todo-container">
      <Header />
      <Text/>
      <AppName />
      <TodoName />
      <Todoitem1 />
      <Todoitem2 />
      <Todoitem3 />
      <Todoitem4 />
      <Todoitem5/>
      <Footer/>
    </div>
  );
}

export default App;
