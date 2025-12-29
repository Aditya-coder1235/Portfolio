import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-50 mb-5">
            <div>© 2025 Aditya Girawale | All Rights Reserved</div>
            <div>
                <a href="https://github.com/Aditya-coder1235" className="hover">
                    Github
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                    href="https://www.linkedin.com/in/aditya-girawale-a72aab385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="hover"
                >
                    linkedin
                </a>
            </div>
        </div>
    );
};

export default Footer;
