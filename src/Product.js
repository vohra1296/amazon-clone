import { Button } from '@material-ui/core';
import   React  from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({title,image,price,rating}){
    const [state, dispatch] = useStateValue();
    
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                title: title,
                image: image,
                    price: price,
                rating: rating

            },
        });
    }
   
  
    return(
        <React.Fragment>
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
              <button  className="button" onClick = {addToBasket}>Add Basket</button>
        </div>
      
        </React.Fragment>
       
    );
}
export default Product;
