import React from 'react';
import '../styles/App.css';

interface FooterData {
    description: string;
}

const Footer: React.FC<FooterData> = (
    { description }: FooterData
) => {
    return (
        <footer className="app-footer">
            <p>{description}</p>
        </footer>
    );
}

export default Footer;