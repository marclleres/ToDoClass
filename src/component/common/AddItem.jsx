import { useState } from "react";

export const Additem = ({ handleSubmit }) => {
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);

    const handleSubmitWithClose = (e) => {
        setIsAddItemOpen(!isAddItemOpen);
        handleSubmit(e);
    }

    return <div className="d-flex ps-2">
        <div role="button" className="pb-2 material-symbols-outlined d-flex align-items-center" onClick={() => setIsAddItemOpen(!isAddItemOpen)}>add</div>
        {isAddItemOpen
            ? <form onSubmit={handleSubmitWithClose}>
                <div className="d-flex align-items-center ">
                    <div className="ps-4"><input name="name" placeholder="Name" required /></div>
                    <div className="ps-4"><input name="category" placeholder="Category" required /></div>
                    <div className="ps-4"><button type="submit" className="btn btn-outline-primary btn-sm">Add</button></div>
                    <div className="ps-4"><button type="reset" className="btn btn-outline-primary btn-sm" >Reset</button></div>
                </div>
            </form>
            : null}
    </div>
}