import React from 'react';
import ShopItem from './ShopItem'
import ShopImage1 from '../assets/ShopImage1.webp'
import ShopImage2 from '../assets/ShopImage2.webp'
import ShopImage3 from '../assets/ShopImage3.webp'
import ShopImage4 from '../assets/ShopImage4.webp'
import ShopImage5 from '../assets/ShopImage5.webp'
import ShopImage6 from '../assets/ShopImage6.webp'

const Shop = () => {
    return(
        <div className="container">
            <div className="text-center fw-bold display-3 " style={{marginTop: "2rem", marginBottom: "2rem", color: "rgb(106, 190, 82)"}}>Shop Now</div>
            <div className="card-group d-flex justify-content-around">
                    <ShopItem image={ShopImage1} description="Biodegradable Jute Grow Bags 8x12 &amp; 6x6 inches" price="&#8377;55.00" />
                    <ShopItem image={ShopImage2} description="Biodegradable Jute Grow Bags 8x12 inches with Cloth Handle." price="&#8377;135.00" />
                    <ShopItem image={ShopImage3} description="Birchwood Fork (Pack of 100) 16cm" price="&#8377;138.00" />
                    <ShopItem image={ShopImage4} description="Birchwood Spoon (Pack of 100) 14cm" price="&#8377;121.00" />
                    <ShopItem image={ShopImage5} description="Cotton Carry Bags(14x18 Size)" price="&#8377;38.00" />
                    <ShopItem image={ShopImage6} description="Canvas Box Bag - Cotton (16x14x4)" price="&#8377;121.00" />
            </div>
        </div>
    )
}

export default Shop;