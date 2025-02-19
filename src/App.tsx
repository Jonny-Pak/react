import InputTodo from "./todo/input.todo";

function App() {
  const name = "IT"
  const age = 20;
  const info = {
    gender: "male",
    address: "HochiMinh"
  }

  const [listTodo, setListTodo] = useState(
     ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6"]
  )
  return(
    <div>
      <div className="parent" id ="Eric">
        <div className="child"></div>
      </div>
      <InputTodo 
        name={name}
        age={age}
        hoidanit={info}

        listTodo={listTodo}
        setListTodo = {setListTodo}
        />

        <ul>
          {todos.map((item, index) => {
            return (
            <li key={index}> {item}</li>
          )
          })}
        </ul>
    </div>
  )
}

export default App;