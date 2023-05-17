const Popular = (props) => {
  return (
    <h3>
      Popular - <span className="popular">{props.popular}</span>
      <img className="dish" src={props.dish} />
    </h3>
  )
}

export default Popular
