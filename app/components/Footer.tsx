import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-50 py-6 text-center border-t border-blue-100">
        <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Realasto. All rights reserved. | Designed with ❤️ by Pirunthapan
        </p>
        </footer>
    );
};

export default Footer;
