import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ProductC({p}) {
    return(
        <div className="box">
            <h5>{p.title}</h5>

            <div className="product-img">
                <img src={p.thumbnail}/>
            </div>

            <div className="product-data-grid">
                <div className="white-box">
                    <button>
                        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                    </button>
                </div>
                <div className="white-box">
                    <Link to={`http://localhost:3000/product/${p.id}`}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductC;