import React, { useState, useEffect } from "react";

const ProductTable = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [productsTable, setProductsTable] = useState([]);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState([]);

  //
  useEffect(() => {
    const fetchProducts = async () => {
      const url = "http://localhost:3000/products";
      try {
        let response = await fetch(url);
        if (!response.statusText) return;
        let result = await response.json();
        //
        setProductsTable(result);
        setAllProducts(result);
        let filteredProducts = result.filter((product) => {
          return product.stocked === true;
        });
        setFilteredProducts(filteredProducts);
        //
      } catch (err) {
        console.log(err);
      }
    };
    //
    fetchProducts();
  }, []);
  //
  //
  const handleInStockChange = () => {
    if (checked === false) {
      let filteredProducts = productsTable.filter((product) => {
        return product.stocked === true;
      });
      setProductsTable(filteredProducts);
    } else if (checked === true && inputValue.length > 0) {
      let searchedProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(inputValue.toLowerCase());
      });
      setProductsTable(searchedProducts);
    } else {
      setProductsTable(allProducts);
    }
    //
    setChecked(!checked);
  };
  //
  const handleInputChange = (e) => {
    let searchedWord = e.target.value;
    setInputValue(searchedWord);
    if (checked === true) {
      let searchedProducts = filteredProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      setProductsTable(searchedProducts);
    } else {
      let searchedProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      setProductsTable(searchedProducts);
    }
  };
  //
  return (
    <div className="col-3 border border-danger py-2 my-3">
      <div>
        <fieldset>
          <input type="text" className="w-100" onChange={handleInputChange} />
          <br />
          <input type="checkbox" onChange={handleInStockChange} />{" "}
          <label>Only shows products in stock</label>
        </fieldset>
      </div>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <strong className="d-flex justify-content-between">
              <span>Name</span>
              <span>Price</span>
            </strong>
          </li>
          {productsTable.map((product, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between ${
                product.stocked !== true ? "text text-danger" : ""
              }`}
            >
              <span>{product.name}</span>
              <span>{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductTable;
