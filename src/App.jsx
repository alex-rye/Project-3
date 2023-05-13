import './App.css'
import restaurantArray from './restaurants.json'
import Restaurant from './components/Restaurant.jsx'

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Best Restaurants in Columbus, Ohio</h1>
      </header>
      <main>
        {restaurantArray.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.name} />
        ))}
      </main>
    </div>
  )
}

export default App
