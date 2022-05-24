import React from 'react';

const Card = (props) => {
    return(
        <div>
            <div className="card text-center shadow p-3 mb-5 bg-white rounded" style={{maxWidth: "362px",border: "0"}}>
                <img src={props.image} alt={props.title} style={{margin: "auto", marginTop: "2rem", marginBottom: "2rem"}} />
                    <div className="card-body" >
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text" style={{marginBottom: "3rem"}}>{props.details}</p>
                    </div>
            </div>
        </div>
    )
}

export default Card;