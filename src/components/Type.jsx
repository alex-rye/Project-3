const Type = (props) => {
  let colorVariable

  switch (props.type) {
    case 'Southern Italian':
      colorVariable = 'rgb(2, 191, 160)'
      break
    case 'New American':
      colorVariable = 'rgb(10, 114, 199)'
      break
    case 'Creole':
      colorVariable = 'rgb(1, 6, 145)'
      break
    case 'Steakhouse':
      colorVariable = 'rgb(115, 2, 2)'
      break
    case 'German':
      colorVariable = 'rgb(214, 172, 2)'
      break
    case 'Italian':
      colorVariable = 'rgb(39, 148, 3)'
      break
    case 'American Comfort':
      colorVariable = 'rgb(23, 186, 227)'
      break
    case 'Southern':
      colorVariable = 'rgb(227, 128, 23)'
      break
    case 'Spanish':
      colorVariable = 'rgb(235, 196, 5)'
      break
    case 'Seafood':
      colorVariable = 'rgb(1, 64, 145)'
      break
    case 'Mediterranean':
      colorVariable = 'rgb(4, 186, 131)'
      break
    case 'Sushi':
      colorVariable = 'rgb(250, 132, 22)'
      break
    case 'Tacos':
      colorVariable = 'rgb(250, 132, 22)'
      break
    case 'Vegan':
      colorVariable = 'rgb(49, 173, 3)'
      break
    case 'Indian':
      colorVariable = 'rgb(196, 152, 39)'
      break
    case 'Diner':
      colorVariable = 'rgb(207, 56, 111)'
      break
    case 'Brunch':
      colorVariable = 'rgb(237, 150, 0)'
      break
    default:
      colorVariable = 'blue'
  }

  return (
    <div id="type-container">
      <h5 className="type" style={{ backgroundColor: colorVariable }}>
        {props.type}
      </h5>
    </div>
  )
}

export default Type
