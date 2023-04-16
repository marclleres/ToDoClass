export const Header = (props) => {
    const myBool = true;
    const toDo = "To Do list";
    const pasToDo = "pas To do list"

    return <>
        {
            myBool
                ? <div className={props.titleClass}>
                    {props.name}
                </div >
                : <div>
                    {pasToDo}
                </div>
        }
    </>
}