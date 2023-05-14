import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={
                {
                    background: `url(${footer})`,
                    backgroundSize: 'cover'
                }
            }
            className='p-10'>
            <div className="footer ">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © {currentYear} - All right reserved by Travel Utopia</p>
            </div>
        </footer>
    );
};

export default Footer;