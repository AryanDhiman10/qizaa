import React from 'react'; 
import Card from './Card';
import b2b from '../assets/b2b.webp';
import sustainability from '../assets/sustainability.webp';
import community from '../assets/community.webp';

const Offerings = () => {
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around">
                <Card image={sustainability} title="Sustainble Products" details="Buy sustainable zero-waste products from best brands." />
                <Card image={b2b} title="B2B Services" details="Introducing sustainable culture in corporate environment." />
                <Card image={community} title="Our Community" details="Introducing sustainable culture in all communities. " />
            </div>
        </div>
    )
}

export default Offerings;