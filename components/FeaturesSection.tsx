
import React from 'react';

const FeatureItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="p-6 bg-gray-900/40 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeaturesSection: React.FC = () => {
    const features = [
        { title: "Conversación Natural y Fluida", description: "Interactúa con SAM como si hablaras con una persona. Entiende el contexto, la intención y los matices." },
        { title: "Análisis de Datos Avanzado", description: "Procesa y analiza grandes volúmenes de datos en segundos para extraer insights valiosos." },
        { title: "Generación de Contenido Creativo", description: "Escribe código, guiones, correos electrónicos, poemas y mucho más con una calidad sorprendente." },
        { title: "Razonamiento Complejo", description: "Resuelve problemas lógicos, matemáticos y de programación con una capacidad de razonamiento superior." },
        { title: "Integración Sencilla", description: "Conecta SAM IA a tus aplicaciones y flujos de trabajo existentes a través de una API simple y potente." },
        { title: "Seguridad y Privacidad", description: "Construido con la seguridad como pilar fundamental, garantizando que tus datos estén siempre protegidos." },
    ];
    
    return (
        <section id="características" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                     <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Capacidades</h2>
                    <p className="mt-4 text-4xl md:text-5xl font-bold text-white">Un universo de posibilidades</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
