import ProductList from "../ProductList";
import SearchBar from "../SearchBar";
import { useState } from "react";


function FilterableProductTable({ products }) {

    const[filterText,setFilterText]=useState('');
    const[inStockOnly,setInStockOnly]=useState(false);

    return (
      <div>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
        <ProductList products={products} filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    );
  }

  export default FilterableProductTable;