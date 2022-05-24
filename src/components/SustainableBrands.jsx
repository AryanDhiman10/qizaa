import React from 'react';
import Card from './Card'
import SustainableBrands1 from '../assets/SustainbleBrands1.webp';
import SustainableBrands2 from '../assets/SustainbleBrands2.webp';
import SustainableBrands3 from '../assets/SustainbleBrands3.webp';
import SustainableBrands4 from '../assets/SustainbleBrands4.webp';
import SustainableBrands5 from '../assets/SustainbleBrands5.webp';
import SustainableBrands6 from '../assets/SustainbleBrands6.webp';


const SustainableBrands = () => {
    return(
        <div  style={{backgroundColor: "rgb(250, 250, 250)"}}>
            <div className="container text-center py-1">
                <h1 className="display-4" style={{marginTop: "1rem", margin: "2rem"}}>Sustainable Brands</h1>
                <div className="card-group d-flex justify-content-around">
                    <Card image={SustainableBrands1} title="Brown Living" details="Buy sustainable zero-waste products from best brands" />
                    <Card image={SustainableBrands2} title="Planet Care" details="Buy sustainable zero-waste products from best brands." />
                    <Card image={SustainableBrands3} title="Prakati" details="Buy sustainable zero-waste products from best brands" />
                    <Card image={SustainableBrands4} title="Ecohoy" details="Buy sustainable zero-waste products from best brands." />
                    <Card image={SustainableBrands5} title="The Sustainable Indian" details="Buy sustainable zero-waste products from best brands." />
                    <Card image={SustainableBrands6} title=" Earthsy.in" details="Buy sustainable zero-waste products from best brands" />
                </div>
            </div>
        </div>
    )
}

export default SustainableBrands;