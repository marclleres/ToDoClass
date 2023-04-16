import { useEffect, useState } from "react";

export const TheList = () => {
    const [toDoItems, setToDoItem] = useState([{}]);
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);

    useEffect(() => {
        setToDoItem([
            { name: "Laver la voiture", category: "Corvé" },
            { name: "Nettoyer le salon", category: "Corvé" },
            { name: "Manger", category: "Plaisir" },
        ]);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        setToDoItem([...toDoItems, Object.fromEntries(formData.entries())]);
        setIsAddItemOpen(false);
    }

    return <div className="text-center my-4" >
        <div style={{ maxWidth: "40em" }}>
            <h1 className="text-center my-4">To Do List</h1>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary" onClick={() => setIsAddItemOpen(!isAddItemOpen)}>Add Item</button>
            </div>
            {isAddItemOpen
                ? <form onSubmit={handleSubmit} className="p-4">
                    <div className="d-flex justify-content-center">
                        <div className="p-2"><input name="name" placeholder="Name" required /></div>
                        <div className="p-2"><input name="category" placeholder="Category" required /></div>
                        <div className="p-2"><button type="reset" className="btn btn-outline-primary btn-sm" >Reset</button></div>
                        <div className="p-2"><button type="submit" className="btn btn-outline-primary btn-sm" >Submit</button></div>
                    </div>
                </form>
                : null}
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
                        {toDoItems.map((toDoItem) => {
                            const myKey = `${toDoItem.name}_${toDoItem.category}`;
                            return (
                                <tr key={myKey}>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" />
                                    </th>
                                    <td>{toDoItem.name}</td>
                                    <td>{toDoItem.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div >
}