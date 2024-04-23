import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductP() {
    const [pData, setPData] = useState({});
    const {id} = useParams();

    const getProductByID = async ()=> {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        const productData = await response.json();
        console.log(productData);
        setPData(productData);
    };

    useEffect(()=> {
        getProductByID();
    }, []);

    return(
        <div className="container">
            <div className="grid-2">
                <div className="product-data-box">
                    <div className="product-main-img">
                        <img src={pData.thumbnail}/>
                    </div>
                </div>
                <div className="product-data-box">
                    <div className="grid-2">
                        <div className="white-box" style={{gridColumn:"1/3"}}>
                            <h5>Terméknév</h5>
                            <input type="text" 
                            onChange={(e)=>setPData(p=>({...p, title:e.target.value.trim()}))}
                            value={pData.title}/>
                        </div>
                        
                        <div className="white-box">
                            <h5>Kategória</h5>
                            <input type="text" 
                            onChange={(e)=>setPData(p=>({...p, category:e.target.value.trim()}))}
                            value={pData.category}/>
                        </div>
                        <div className="white-box">
                            <h5>Márka</h5>
                            <input type="text" 
                            onChange={(e)=>setPData(p=>({...p, brand:e.target.value.trim()}))}
                            value={pData.brand}/>
                        </div>

                        <div className="white-box">
                            <h5>Ár <FontAwesomeIcon icon="fa-solid fa-tag" /></h5>
                            <input type="number" 
                            onChange={e=>setPData(p=>({...p, price:parseInt(e.target.value)}))}
                            value={pData.price}/>
                        </div>

                        <div className="white-box">
                            <h5>
                                Készlet  
                                <FontAwesomeIcon icon="fa-solid fa-square-poll-vertical"/>
                            </h5>
                            <input type="number" 
                            onChange={e=>setPData(p=>({...p, stock:parseInt(e.target.value)}))}
                            value={pData.stock}/>
                        </div>
                    </div>

                    <button>Felülírás</button>
                </div>
            </div>
        </div>
    );
}

export default ProductP;