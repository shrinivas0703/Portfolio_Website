import React, {} from "react";
import {SocialIcon} from "react-social-icons";

function Footer() {
    return(
        <footer className="bg-gray-800 py-5">
            <div className="flex flex-col items-center">
                <div className="space-x-4 mb-3">
                    <SocialIcon url="https://www.linkedin.com/in/shrinivas-venkatesan/" className="shadow-2xl"/>
                    <SocialIcon url="https://github.com/shrinivas0703" className="shadow-2xl" bgColor="#111827" fgColor="white"/>
                    <SocialIcon url="https://www.facebook.com/shrinivas.venkatesan/"/>
                    <SocialIcon url="https://www.instagram.com/shrinivas_v/"/>
                </div>
                <div className="text-sm">
                    Copyright © Shrinivas Venkatesan 2023   
                </div>
            </div>
        </footer>
    );
}
export default Footer;