import React from 'react';
import { SamLogo } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-gray-800 py-8 px-4">
            <div className="container mx-auto max-w-7xl text-center text-gray-500">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <SamLogo className="h-10 w-10" />
                     <p>&copy; {new Date().getFullYear()} SAM verce por Samuel Casseres. Todos los derechos reservados.</p>
                     <a href="mailto:helpsamia@gmail.com" className="hover:text-white transition-colors">helpsamia@gmail.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;