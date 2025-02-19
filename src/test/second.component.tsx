const EricComponent = () => {
//    const name ="Hoi dan IT";
//    const age = 26;
    const info = {
        name: "Eric",
        age: 26
    }
//    const arr = [1, 2, 3, true, {name: "Eric"}]
    //jsx
    return (
        <did>
            <h1>Hello: {JSON.stringify(info)}</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                classname="photo"
            />
                <ul>
                    <li>Invent new traffic lights </li>
                    <li>Rehearse a movie scene </li>

                    <li>Improve the spectrum technology</li>
                </ul>

        </did>
    )
}

export default EricComponent;