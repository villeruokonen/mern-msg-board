import React from 'react';
import '../styles/App.css';

interface FooterData {
    description: string;
}

const Footer: React.FC<FooterData> = (
    { description }: FooterData
) => {
    return (
        <div className="app-footer">
            <p>{description}</p>
        </div>
    );
}

export default Footer;