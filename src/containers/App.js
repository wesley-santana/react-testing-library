import Todo from '../components/Todo/Todo';
import Counter from '../components/Counter/Counter'
function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Todo />
      <hr />
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
