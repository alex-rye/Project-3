const Restaurant = (props) => {
  return (
    <div className="restaurant-info">
      <img src={props.restaurant.photo} alt={props.restaurant.name} />
    </div>
  )
}

export default Restaurant
