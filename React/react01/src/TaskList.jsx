import React, {useState} from "react";

function TaskList(){
    var [taskComplete, setTaskComplete] = useState(false);
    var [elementCount, setElementCount] = useState(1);

    // function completeTask() {
    //     setTaskComplete(true);
    // }

    // function undo () {
    //     setTaskComplete(false);
    // }

    function status () {
        setTaskComplete(!taskComplete)
    }

    function addItem() {
        setElementCount(elementCount+=1);
    }

    function removeItem() {
        if(elementCount > 1){
            setElementCount(elementCount-=1);
        }   
    }

    return(
        <div>
            <ul>
                <li>

                    {elementCount + " "}
                    <span style={taskComplete ? {textDecoration: "line-through"} : null} onClick={status}>
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