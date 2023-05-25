import { CheckBoxControlled } from "./CheckBoxControlled";

export const ToDoItemList = ({ handleDone, deleteToDoItem, toDoItems }) => {

    return <>
        <div className="d-flex justify-content-center">
            <table className="table table-striped mx-3 mx-lg-0">
                <thead>
                    <tr>
                        {handleDone && <th scope="col">Status</th>}
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
                                {handleDone &&
                                    <th scope="row">
                                        <CheckBoxControlled handleDone={() => handleDone(index)} isDone={toDoItem.isDone} />
                                    </th>}
                                <td>{toDoItem.name}</td>
                                <td>{toDoItem.category}</td>
                                {deleteToDoItem &&
                                    <td>
                                        <button className="material-symbols-outlined" onClick={deleteToDoItem}>remove</button>
                                    </td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    </>
}