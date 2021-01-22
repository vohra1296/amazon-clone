import   React  from 'react';
import "./Home.css"
import home_image from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/MTM3M2NhM2Et-MzgwYzQ0MTct-w1500._CB411759470_.jpg"
import Product from "./Product";
import prod1 from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/GreenWorksprod01.jpg";
import prod2 from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/FujiFilmprod02.jpg"
import prod3 from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/prod3.jpg";
import prod4 from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/prod4.jpg";
import prod5 from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/prod5.jpg";
import prod6 from "/Users/cowell.cor/Desktop/clone/amazoneclone/src/image/prod6.jpg";


function Home(){
    return(
        <div className ='home'>
           <div className ="home_container">
               <img className = "home_image"
               src ={home_image} />
            <div className= "home_row">
                <Product 
                title= "GreenWorks 2600502 13 Amp 20-Inch Corded Snow Thrower" 
                price ="159.00"
                image={prod1} 
                rating = {3}
                />
                <Product
                    title= "Fujifilm Instax Mini 11 Instant Camera - Sky Blue" 
                    price ="89.00"
                    image={prod2} 
                    rating = {4}
                                 />
                <Product 
                 title= "Bamboo Living Ultra Soft Silky Deep Pocket Solid Rayon from Bamboo 6 Pieces Sheet Set with 4 Pillowcases, Black Color Queen Size" 
                 price ="31.00"
                 image={prod3} 
                 rating = {3}/>
                
                
            </div>
            <div className= "home_row">
            
            <Product 
             title= "Keter Unity Indoor Outdoor BBQ Entertainment Storage Table/Prep Station with Metal Top" 
             price ="229.00"
             image={prod4} 
             rating = {4}/>
            <Product
             title= "Furinno 15111EXBKBR Jaya Computer Study Desk with Bin, Brown" 
             price ="89.99"
             image={prod5} 
             rating = {4} />
                
            </div>
            <div className= "home_row">
            <Product
             title= "AmazonBasics Classic Office Desk Computer Chair - Adjustable, Swiveling, Ultra-Soft Microfiber - Light Gray, Lumbar Support" 
             price ="159.99"
             image={prod6} 
             rating = {3} />
            </div>
           </div>

        </div>
    )
}
export default Home;