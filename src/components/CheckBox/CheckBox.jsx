import "./CheckBox.scss";


export default function CheckBox({ value, onChange }) {
    return (
        <input className="checkboxComponent" type="checkbox" checked={value} onChange={onChange}></input>
    )
}