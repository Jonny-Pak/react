import { useState } from "react";
interface IProps {
    name: string;
    age: number;
    hoidanit: {
        gender: string;
        address: string;
    }
    listTodo: string [];
    setListTodo: (v: string []) => void;
}

const InputTodo  = (props: IProps) => {
const {age, name} = props;
const [todo, setTodo] = useState("")
const [listTodo, setListTodo] = useState(
    ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6"]
)
const [fullname, setFullName] = useState("Eric")
const handleClick = () => {
// alert("click me")
setListTodo([...listTodo, todo])
setTodo("")
}
    console.log(">>> check fullname", fullname)
    return (
        <div>

            <div>age = {age}</div>
            <div>name = {name}</div>
            <div> Add new todo</div>
            <input 
            type="text"
            onChange= {(event) => {
                setTodo(event.target.value)
            }}
            />
            <div>My todo is {fullname}</div>
            &nbsp; &nbsp;
            <button onClick={() => handleClick()}>Save</button>
            <ul>
                {listTodo.map(  (item, index) => {
                    return(
                        <li key ={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default InputTodo;