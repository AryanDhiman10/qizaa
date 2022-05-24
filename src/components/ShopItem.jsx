import React from 'react';

const ShopItem = (props) => {
    return(
        <div>
            <div className="card" style={{maxWidth: "362px",border: "0"}}>
                    <img className="card-img-top" src={props.image} alt="CardImage" style={{ borderRadius: "0"}} />
                    <div className="card-body" >
                        <p className="card-text font-weight-light mb-0">
                            {props.description}
                        </p>
                        <small className="">{props.price}</small>
                    </div>
            </div>
        </div>
    )
}

export default ShopItem;