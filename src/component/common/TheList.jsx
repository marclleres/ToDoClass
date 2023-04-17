import { useEffect, useState } from "react";

export const TheList = () => {
    const [toDoItems, setToDoItems] = useState([{}]);
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);

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
        setIsAddItemOpen(false);
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
            <h1 className="text-center my-4">To Do List</h1>
            <div className="d-flex ps-2">
                <div role="button" className="pb-2 material-symbols-outlined d-flex align-items-center" onClick={() => setIsAddItemOpen(!isAddItemOpen)}>add</div>
                {isAddItemOpen
                    ? <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center ">
                            <div className="ps-4"><input name="name" placeholder="Name" required /></div>
                            <div className="ps-4"><input name="category" placeholder="Category" required /></div>
                            <div className="ps-4"><button type="submit" className="btn btn-outline-primary btn-sm" >Add </button></div>
                        </div>
                    </form>
                    : null}
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-striped mx-3 mx-lg-0">
                    <thead>
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Name</th>
                            <th scope="col">Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toDoItems.map((toDoItem, index) => {
                            const myKey = `${toDoItem.name}_${toDoItem.category}`;
                            const trClassName = toDoItem.isDone ? "text-decoration-line-through" : "";
                            return (
                                <tr key={myKey} className={trClassName}>
                                    <th scope="row">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            onChange={() => handleDone(index)}
                                            checked={toDoItem.isDone}
                                        />
                                    </th>
                                    <td>{toDoItem.name}</td>
                                    <td>{toDoItem.category}</td>
                                    <td>
                                        <button className="material-symbols-outlined" onClick={() => deleteToDoItem(index)}>remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div >
}