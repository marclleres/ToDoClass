import { useEffect } from "react";
import { useState } from "react";

export const TheList = () => {
    const [things, setThings] = useState([{}]);
    const [addOpen, setAddOpen] = useState(false);

    useEffect(() => {
        setThings([
            { name: "Laver la voiture", category: "Corvé" },
            { name: "Nettoyer le salon", category: "Corvé" },
            { name: "Manger", category: "Plaisir" },
        ]);
    }, []);

    return <div className="text-center my-4" >
        <div style={{ maxWidth: "40em" }}>
            <h1 className="text-center my-4">To Do List</h1>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={() => setAddOpen(!addOpen)}>Add</button>
            </div>
            {addOpen
                ? <div>
                    <input className="m-4"></input>
                    <input className="m-4"></input>
                </div>
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
                        {things.map((thing) => {
                            const myKey = `${thing.name}_${thing.category}`;
                            return (
                                <tr key={myKey}>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" />
                                    </th>
                                    <td>{thing.name}</td>
                                    <td>{thing.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div >
}