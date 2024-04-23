import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductC from "./ProductC";

function ProductsP() {
    const [products, setProducts] = useState([]);

    const getProducts = async ()=> {
        const response = await fetch("https://dummyjson.com/products");
        const json = await response.json();
        console.log(json);

        // const products = json.products;
        // console.log(products);
        setProducts(json.products);
    };

    useEffect(()=> {
        getProducts();
    }, []);

    return(
        <div className="container">
            <div className="grid-4">
                {
                    products.map((p, i)=>
                        <ProductC key={i} p={p}/>
                    )
                }
            </div>
        </div>
    );
}

export default ProductsP;