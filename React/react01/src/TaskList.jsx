import React, {useState} from "react";
import processLogin from "./Login";

function TaskList(){
    var [taskComplete, setTaskComplete] = useState(false);
    var [elementCount, setElementCount] = useState(1);
    var [element, setElement] = useState({element: ""})

    // function completeTask() {
    //     setTaskComplete(true);
    // }

    // function undo () {
    //     setTaskComplete(false);
    // }

    function status () {
        setTaskComplete(!taskComplete);
    }

    function addItem() {
        setElementCount(elementCount+=1);
    }

    function removeItem() {
        if(elementCount > 1){
            setElementCount(elementCount-=1);
        }   
    }

    function handleUpdate(e) {
        const { value, name } = e.target;
    
        setElement((prevValue) => {
        if(name === "username") { 
            return { ...prevValue, username: value};
        } else{
            return{ ...prevValue, password: value};
        }
        });
    }

    return(
        <div>
            <form action="">
                <input name = "List" type= "text" placeholder= "Add element" onChange={handleUpdate} />
                <button type= "submit" onClick={processLogin}>
                    Add
                </button>
                <button type= "submit" onClick={processLogin}>
                    Clear
                </button>
            </form>
            <ul>
                {elementCount + " "}
                <li style={taskComplete ? {textDecoration: "line-through"} : null} onClick={status}>
                    <span >
                        Buy Milk
                    </span>
                    
                    {/* <button onClick={completeTask}>Done</button>
                    <button onClick={undo}>Undo</button> */}
                    {" "}
                    <button onClick={addItem}> + </button>
                    <button onClick={removeItem}> - </button>
                </li>
            </ul>
        </div>
    );
}

export default TaskList;