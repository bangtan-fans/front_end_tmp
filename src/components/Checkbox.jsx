function Checkbox({ id, handleChange, toggleTab }) {
  return (
    <div>
      <label className="switch">
    <input
      type="checkbox"
      id={id}
      value={id}
      onChange={(e) => handleChange(e.target.value)}
    />
    <span className="slider round"></span>
    </label>
    </div>
  )
}

export default Checkbox