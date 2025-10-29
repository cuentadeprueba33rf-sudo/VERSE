
import React from 'react';

interface PurposeCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const PurposeCard: React.FC<PurposeCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600/20 text-indigo-400 mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

const PurposeSection: React.FC = () => {
    const purposes = [
        {
            title: "Democratizar la IA",
            description: "Nuestra misión es hacer que la inteligencia artificial avanzada sea accesible para todos, desde desarrolladores y empresas hasta creativos y estudiantes.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        },
        {
            title: "Potenciar la Creatividad",
            description: "Queremos que SAM IA sea un compañero creativo, una herramienta que ayude a artistas, escritores y creadores a superar barreras y explorar nuevas ideas.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
        },
        {
            title: "Impulsar la Innovación",
            description: "Ofrecemos una plataforma robusta y flexible para que las empresas y desarrolladores construyan la próxima generación de aplicaciones inteligentes.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        },
    ];

    return (
        <section id="propósito" className="py-20 px-4 animated-gradient">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Nuestro Propósito</h2>
                    <p className="mt-4 text-4xl md:text-5xl font-bold text-white">Construyendo un futuro más inteligente</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {purposes.map((purpose, index) => (
                        <PurposeCard key={index} {...purpose} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PurposeSection;
