export const Title = (props) => {
    return <>
        <div className={`text-center my-4 ${props.class}`}>
            <u>{props.titleName}</u>
        </div>
    </>
}