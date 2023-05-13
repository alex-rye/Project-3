import './App.css'
import restaurantArray from './restaurant.json'
import Restaurant from './components/Restaurant.jsx'

const App = () => {
  return (
    <div className="App">
      <h1 className="header">Best Restaurants in Columbus, Ohio</h1>
      <main>
        {restaurantArray.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.name} />
        ))}
      </main>
    </div>
  )
}

export default App
