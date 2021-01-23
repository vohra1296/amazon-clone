import   React  from 'react';
import "./Home.css"
import home_image from "./image/MTM3M2NhM2Et-MzgwYzQ0MTct-w1500._CB411759470_.jpg"
import Product from "./Product";
import prod1 from "./image/GreenWorksprod01.jpg";
import prod2 from "./image/FujiFilmprod02.jpg"
import prod3 from "./image/prod3.jpg";
import prod4 from "./image/prod4.jpg";
import prod5 from "./image/prod5.jpg";
import prod6 from "./image/prod6.jpg";


function Home(){
    return(
        <div className ='home'>
           <div className ="home_container">
               <img className = "home_image"
               src ={home_image} />
            <div className= "home_row">
                <Product 
                id={1}
                title= "GreenWorks 2600502 13 Amp 20-Inch Corded Snow Thrower" 
                price = {159.00}
                image={prod1} 
                rating = {3}
                />
                <Product
                    id={2}
                    title= "Fujifilm Instax Mini 11 Instant Camera - Sky Blue" 
                    price ={89.00}
                    image={prod2} 
                    rating = {4}
                                 />
                <Product 
                 id={3}
                 title= "Bamboo Living Ultra Soft Silky Deep Pocket Solid Rayon from Bamboo 6 Pieces Sheet Set with 4 Pillowcases, Black Color Queen Size" 
                 price ={31.00}
                 image={prod3} 
                 rating = {3}/>
                
                
            </div>
            <div className= "home_row">
                <Product 
                    id={4}
                    title= "Keter Unity Indoor Outdoor BBQ Entertainment Storage Table/Prep Station with Metal Top" 
                    price ={229.00}
                    image={prod4} 
                    rating = {4}
                 />
            <Product
             id={5}
             title= "Furinno 15111EXBKBR Jaya Computer Study Desk with Bin, Brown" 
             price ={89.99}
             image={prod5} 
             rating = {4} />
                
            </div>
            <div className= "home_row">
            <Product
             id={6}
             title= "AmazonBasics Classic Office Desk Computer Chair - Adjustable, Swiveling, Ultra-Soft Microfiber - Light Gray, Lumbar Support" 
             price ={159.99}
             image={prod6} 
             rating = {3} />
            </div>
           </div>

        </div>
    )
}
export default Home;