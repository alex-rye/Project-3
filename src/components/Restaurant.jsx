import Type from './Type.jsx'
import Hours from './Hours.jsx'
import Popular from './Popular.jsx'

const Restaurant = (props) => {
  return (
    <div className="restaurant">
      <img src={props.restaurant.photo} alt={props.restaurant.name} />
      <div className="info">
        <h1 className="restaurant-name">
          <a href={props.restaurant.website} target="blank">
            {props.restaurant.name}
          </a>
        </h1>
        <Type type={props.restaurant.type} />
        <h3>Description -</h3>
        <p>{props.restaurant.description}</p>
        <h3>
          Rating - {props.restaurant.rating} stars, {props.restaurant.dollars}
        </h3>
        <h3 className="reviews">
          <a href={props.restaurant.reviews} target="blank">
            Reviews
          </a>
        </h3>
        <Popular
          popular={props.restaurant.popular}
          dish={props.restaurant.dish}
        />
        <h3>{props.restaurant.address}</h3>
        <Hours hours={props.restaurant.hours} />
        <h3>{props.restaurant.options}</h3>
        <h3>{props.restaurant.phone}</h3>
      </div>
    </div>
  )
}

export default Restaurant
