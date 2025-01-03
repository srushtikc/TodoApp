import './App.css'
import List from './List'
function App() {


  return <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
  <li className="list-group-item">Dal</li>
  <li className="list-group-item">Milk</li>
  <li className="list-group-item">Chicken</li>
  <li className="list-group-item">Vegetables</li>
  <li className="list-group-item">Fruits</li>
</ul>

<List/>



 </>

}

export default App;
