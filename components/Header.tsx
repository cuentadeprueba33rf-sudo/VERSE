import React from 'react';
import { SamLogo } from './Icons';

const Header: React.FC = () => {
    const navItems = ['Quiénes Somos', 'Propósito', 'Contacto'];
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
            <div className="container mx-auto max-w-7xl flex justify-between items-center bg-black/30 backdrop-blur-lg border border-gray-800 rounded-full px-6 py-3">
                <a href="#" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                    <SamLogo className="h-8 w-8 text-white" />
                    <span className="font-bold text-xl text-white">SAM Verse</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </nav>
                 <a href="https://samia-com.vercel.app/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                    Empezar
                </a>
            </div>
        </header>
    );
};

export default Header;