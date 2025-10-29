import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section id="contacto" className="py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                 <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.1)_0%,_rgba(124,58,237,0)_50%)] -z-10"></div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Listo para el futuro?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Forma parte de la comunidad que está dando forma a la próxima generación de inteligencia artificial. Prueba SAM IA ahora y descubre cómo puede transformar tu mundo.
                    </p>
                    <a 
                        href="https://samia-com.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-600 text-white font-semibold px-10 py-4 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/30"
                    >
                        Prueba SAM IA ahora
                    </a>
                 </div>
            </div>
        </section>
    );
};

export default CTASection;