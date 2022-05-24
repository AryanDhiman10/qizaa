import React from 'react';
import Create from '../assets/JoinUs/Create.png'
import Innovate from '../assets/JoinUs/Innovate.png'
import Scale from '../assets/JoinUs/Scale.png'

const JoinUs = () => {
    return(
        <div className="container shadow-lg p-3 mb-5 bg-white rounded text-center">
            <h1 className='Display-2 py-4' style={{color: "rgb(106, 190, 82)"}}>Live a Sustainable Life</h1>
            <h4 className='py-3'>Join Us Now</h4>
            <input className='px-4' type="email" placeholder='Add your Email' style={{border: "2px solid grey"}} />
            <br />
            <button className='btn px-4 my-4' style={{borderRadius: '40px', backgroundColor: "rgb(106, 190, 82)", color: "white"}}>Submit</button>
            <div className="d-flex justify-content-around pb-5">
                <div class="vstack gap-2 col-md-5 mx-auto">
                    <h3 className='display-6'>Create</h3>
                    <img className='mx-auto' src={Create} alt="Create"style={{maxWidth: "176px", maxHeight: "176px"}} />
                </div>
                <div class="vstack gap-2 col-md-5 mx-auto">
                    <h3 className='display-6'>Innovate</h3>
                    <img className='mx-auto' src={Innovate} alt="Create"style={{maxWidth: "176px", maxHeight: "176px"}} />
                </div>
                <div class="vstack gap-2 col-md-5 mx-auto">
                    <h3 className='display-6'>Scale</h3>
                    <img className='mx-auto' src={Scale} alt="Create"style={{maxWidth: "176px", maxHeight: "176px"}} />
                </div>
            </div>
        </div>
    )
}

export default JoinUs;