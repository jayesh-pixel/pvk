import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface SocialsProps {
  compact?: boolean;
}

const Socials: React.FC<SocialsProps> = ({ compact = false }) => {
    if (compact) {
        return (
            <div className="flex space-x-2">
                {SOCIAL_LINKS.map((item) => (
                    <a 
                        key={item.name} 
                        href={item.href} 
                        className="text-pvk-text-secondary hover:text-pvk-gold transition-colors duration-300"
                        aria-label={item.name}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        );
    }

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