interface IProps {
    name: string;
    age: number;
    hoidanit: {
        gender: string;
        address: string
    }
}



const InputTodo  = (props: IProps) => {
    console.log(">>check props: ", props)
    return (
        <div>
            <div>age = {props.age}</div>
            <div>name = {props.name}</div>
            <div> Add new todo</div>
            <input type="text" />
            &nbsp; &nbsp;
            <button>Save</button>
        </div>
    )
}

export default InputTodo;