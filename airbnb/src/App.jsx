import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import { data } from './data'


function App() {

  const dataElements = data.map(function(item) {
    return <Card 
    key={item.id}
    img={item.coverImg}
    rating ={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    title ={item.title}
    price={item.price}
    openSpots={item.openSpots} />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {dataElements}
      </section>
    </div>
  )
}

export default App
