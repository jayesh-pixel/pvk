import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Socials: React.FC = () => {
    return (
        <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-pvk-text-secondary mb-3">Follow Us</h3>
            <div className="flex space-x-4">
            {SOCIAL_LINKS.map((item) => (
                <a key={item.name} href={item.href} className="text-pvk-text-secondary hover:text-pvk-gold transition-colors duration-300">
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                </a>
            ))}
            </div>
        </div>
    );
};

export default Socials;