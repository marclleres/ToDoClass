export const CheckBoxControlled = ({handleDone, isDone}) => {
    return <input
        className="form-check-input"
        type="checkbox"
        onChange={handleDone}
        checked={isDone}
    />
}