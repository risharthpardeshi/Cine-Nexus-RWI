import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
    return (
        <footer className="bg-black3 py-10 text-white">
            <ContentWrapper>
                <ul className="flex flex-wrap justify-center  gap-5 md:gap-5 mb-5 md:mb-10">
                    <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors text-center md:text-left">Terms Of Use</li>
                    <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors text-center md:text-left">Privacy-Policy</li>
                    <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors text-center md:text-left">About</li>
                    <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors text-center md:text-left">Blog</li>
                    <li className="text-xs md:text-base hover:text-pink cursor-pointer transition-colors text-center md:text-left">FAQ</li>
                </ul>
                <div className="text-xs md:text-sm opacity-50 text-center md:text-left mb-5 md:mb-10 max-w-screen-md mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="flex flex-wrap justify-center  gap-5 md:gap-5 mb-5 md:mb-10">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300 hover:bg-pink">
                        <FaFacebookF />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300 hover:bg-pink">
                        <FaInstagram />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300 hover:bg-pink">
                        <FaTwitter />
                    </span>
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300 hover:bg-pink">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
