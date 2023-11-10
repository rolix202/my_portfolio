import React from "react";
import { FaSquareXTwitter, FaLinkedin, FaBloggerB } from "react-icons/fa6";
import "./footer.css";

function Footer(){
    return (
        <footer className="footer">
            <div className="footer_container container grid">
            <div className="footer_socials">
                    <a href="" className="footer_social-link">
                        <FaSquareXTwitter />
                    </a>
                    <a href="" className="footer_social-link">
                        <FaLinkedin />
                    </a>
                    <a href="" className="footer_social-link">
                        <FaBloggerB />
                    </a>
                </div>

                <p className="footer_copyright text-cs">&copy; 2023 All Rights Reserved</p>

                <p className="footer_copyright text-cs">Developed By <span>Wiliams Roland</span></p>
            </div>
        </footer>
    )
}
export default Footer;