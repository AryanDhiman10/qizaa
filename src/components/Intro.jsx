import React from 'react';
import mainImage from '../assets/mainImage.webp'
import world from '../assets/World.webp'

const Intro = () => {
    return (
        <div className='row' style={{position: "relative"}}>
            <img src={mainImage} alt="Intro" style={{width: "100%", height: "80%"}} />
            <div style={{position: "absolute", top: "30%", left: "35%", transform: "translate(-50%, -50%)", color: "white", width: "30%"}}>
                <h1 className="display-4 fw-bold" style={{letterSpacing: "4px"}}>Sustainability In Your Pocket</h1>
                <h4 className="fw-light my-5">Building a future that's exciting</h4>
                <button className='btn btn-primary px-4' style={{borderRadius: '40px', backgroundColor: "rgb(69, 221, 245)"}}>Explore</button>
            </div>
            <div style={{position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", color: "white", width: "30%"}}>
                <img src={world} alt="World" />
            </div>
            <div className="imageBottom col-md-8 offset-md-4" style={{color: "rgb(106, 190, 82)", position: "absolute", bottom: "4rem", width: "30%", textAlign: "center"}}>
                <h1>WHAT WE OFFER</h1>
                <h6>Qizza is an All in One platform for sustainable products, B2B Sustainble Services, and Community Programs for a Sustainble Lifestyle.</h6>
            </div>
        </div>
    )
}

export default Intro;