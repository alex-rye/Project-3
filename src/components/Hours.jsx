const Hours = (props) => {
  return (
    <select name="hours" id="hours">
      <option value="monday">Monday: {props.hours.monday}</option>
      <option value="tuesday">Tuesday: {props.hours.tuesday}</option>
      <option value="wednesday">Wednesday: {props.hours.wednesday}</option>
      <option value="thursday">Thursday: {props.hours.thursday}</option>
      <option value="friday">Friday: {props.hours.friday}</option>
      <option value="saturday">Saturday: {props.hours.saturday}</option>
      <option value="sunday">Sunday: {props.hours.sunday}</option>
    </select>
  )
}

export default Hours
