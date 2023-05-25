import { useEffect, useState } from "react";
import { Title } from "./Title";
import { Additem } from "./AddItem";
import { ToDoItemList } from "./ToDoItemList";

export const ToDoHome = () => {
    const [toDoItems, setToDoItems] = useState([{}]);

    useEffect(() => {
        setToDoItems([
            { name: "Laver la voiture", category: "Corvé", isDone: false },
            { name: "Nettoyer le salon", category: "Corvé", isDone: false },
            { name: "Manger", category: "Plaisir", isDone: true },
        ]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const toDoitem = { ...Object.fromEntries(formData.entries()), isDone: false };
        setToDoItems([...toDoItems, toDoitem]);
    }

    const handleDone = (index) => {
        toDoItems[index].isDone = !toDoItems[index].isDone;
        setToDoItems([...toDoItems]);
    }

    const deleteToDoItem = (index) => {
        toDoItems.splice(index, 1);
        setToDoItems([...toDoItems]);
    }

    return <div className="text-center my-4" >
        <div style={{ maxWidth: "40em" }}>
            <Title titleName="To Do list" class="display-1" />
            <Additem handleSubmit={handleSubmit} />
            <ToDoItemList handleDone={handleDone} deleteToDoItem={deleteToDoItem} toDoItems={toDoItems} />
        </div>
    </div >
}