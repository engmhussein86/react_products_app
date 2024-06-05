
import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import {products} from './data/products'

function App() {
 
  return (
    <>
      <h1>Products app</h1>
      <FilterableProductTable products={products} />

    </>
  )
}

export default App
