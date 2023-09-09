function Checkbox({ id, handleChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      value={id}
      onChange={(e) => handleChange(e.target.value)}
    />
  )
}

export default Checkbox