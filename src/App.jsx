import InputTodo from "./todo/input.todo";

function App() {
  const name = "IT"
  const age = 20;
  const info = {
    gender: "male",
    address: "HochiMinh"
  }
  return(
    <div>
      <div className="parent" id ="Eric">
        <div className="child"></div>
      </div>
      <InputTodo 
        name={name}
        age={age}
        hoidanit={info}
        />
    </div>
  )
}

export default App;