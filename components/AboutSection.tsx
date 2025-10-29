import React from 'react';
import { SamLogo } from './Icons';

const AboutSection: React.FC = () => {
    return (
        <section id="quiénes-somos" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                     <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Quiénes Somos</h2>
                    <p className="mt-4 text-4xl md:text-5xl font-bold text-white">La visión detrás de la innovación</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                        <h3 className="text-3xl font-bold text-white mb-4">SAM verce</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Somos SAM verce, una empresa de tecnología visionaria fundada por Samuel Casseres. Nuestra pasión es construir el futuro, y SAM IA es nuestro primer gran paso. Nos dedicamos a crear herramientas inteligentes que no solo resuelven problemas complejos, sino que también inspiran y potencian la capacidad humana. Creemos en un futuro donde la tecnología y la humanidad colaboran para alcanzar nuevas cimas.
                        </p>
                    </div>
                     <div className="flex justify-center items-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 h-full">
                        <div className="relative">
                            <SamLogo className="w-48 h-48 text-white" />
                             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-30 -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;