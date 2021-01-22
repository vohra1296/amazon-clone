import   React  from 'react';
import "./Product.css";

function Product({title,image,price,rating}){
    return(
        <div className = "product">
            <div className = "product_info">
            <p>{title}</p>
            <p className = "product_price">
            CDN$ <strong>{price}</strong></p>
            
            <div className ="product_rating">
                {Array(rating).fill().map(( _,i) =>
                     (<p>&#11088;</p> ))}
            </div>
            </div>
            <img src = {image} />
            <button> Add to Basket</button>

        </div>
    );
}
export default Product;
