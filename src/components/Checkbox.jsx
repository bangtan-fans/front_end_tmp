function Checkbox({ id, handleChange, toggleTab }) {
  return (
    <div>
    <input
      type="checkbox"
      id={id}
      value={id}
      onChange={(e) => handleChange(e.target.value)}
    />
    <button onClick={() => toggleTab(2)}></button>
    </div>
  )
}

export default Checkbox