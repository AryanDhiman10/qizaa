import React from 'react';
import bhim from '../assets/Payment/bhim.jpg';
import mastercard from '../assets/Payment/mastercard.webp';
import upi from '../assets/Payment/upi.jpg';
import paypal from '../assets/Payment/paypal.webp';
import visa from '../assets/Payment/visa.png';

const Footer = () => {
    return(
        <div style={{color: "white", backgroundColor: "rgb(35, 47, 62)"}}>
            <footer className="py-4 my-md-0 pt-md-5 border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md text-light">
                            <h5>Contact</h5>
                            <ul className="list-unstyled text-small" style={{color: "white"}}>
                            <li>483/14, Opp. Harikaka</li>
                            <li>Compound, NH4, Belgavi-</li>
                            <li>Hubli Service Road, Belgav</li>
                            <li>- Karnataka India - 590016</li>
                            <li>Email-   info@qizaa.com</li>
                            <li>Call -    +91 9075006557</li>
                            </ul>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram mx-2"></i>
                            <i className="bi bi-twitter"></i>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Shop</h5>
                            <ul className="list-unstyled text-small">
                            <li>All Products</li>
                            <li>Lifestyle Products</li>
                            <li>Organic Product</li>
                            <li>Tableware</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Customer Support</h5>
                            <ul className="list-unstyled text-small">
                            <li>Contact Us</li>
                            <li>Help Center</li>
                            <li>About us</li>
                            <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Policy</h5>
                            <ul className="list-unstyled text-small">
                            <li>Shipping &amp; Returns</li>
                            <li>Terms &amp; Conditions</li>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container text-center py-5" style={{maxWidth: "40%"}}>
                    <span className="fw-light">We accept the following payments</span>
                    <div className="d-flex justify-content-around mt-5">
                        <img src={bhim} alt="bhim" style={{maxWidth: "100px", maxHeight: "35px"}} />
                        <img src={upi} alt="bhim" style={{maxWidth: "100px", maxHeight: "35px"}} />
                        <img src={paypal} alt="paypal" style={{maxWidth: "100px", maxHeight: "35px"}} />
                        <img src={visa} alt="visa" style={{maxWidth: "100px", maxHeight: "35px"}} />
                        <img src={mastercard} alt="mastercard" style={{maxWidth: "100px", maxHeight: "35px"}} />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;