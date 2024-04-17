export default function TextInput({ id, label, value, onChange }) {
    return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input 
            type="text" 
            id={id}
            value={value}
            onChange={onChange}
          />
        </div>
    )
}