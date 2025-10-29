import React from 'react';
import { SamLogo, MenuIcon, PlusIcon, SendIcon, SparklesIcon, MathIcon, DevIcon, SearchIcon, ImageIcon, DocumentIcon, GuideIcon, CameraIcon, UploadIcon } from './Icons';

const features = [
    { name: 'Normal', description: 'General chat', icon: <SparklesIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Math', description: 'Solve problems', icon: <MathIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Canvas Dev', description: 'Code assistant', icon: <DevIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Search', description: 'Find info', icon: <SearchIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Image', description: 'Understand images', icon: <ImageIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Document', description: 'Analyze files', icon: <DocumentIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Guide', description: 'Get help', icon: <GuideIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Upload Photo', description: 'From library', icon: <UploadIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Camera', description: 'Use camera', icon: <CameraIcon className="h-6 w-6 text-indigo-400" /> },
    { name: 'Upload Doc', description: 'From files', icon: <UploadIcon className="h-6 w-6 text-indigo-400" /> },
];

const FeatureButton: React.FC<{name: string; description: string; icon: React.ReactNode; delay: number;}> = ({ name, description, icon, delay }) => {
    return (
        <button className="fade-in-up flex items-center text-left p-3 rounded-lg hover:bg-gray-800/60 transition-colors duration-200" style={{ animationDelay: `${delay}ms`}}>
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-700/50 rounded-full mr-4">
                {icon}
            </div>
            <div>
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </button>
    );
}

const UIMockup: React.FC = () => {
    return (
        <div className="w-full max-w-3xl mx-auto mt-16 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-purple-900/20 p-4 sm:p-6 flex flex-col min-h-[500px]">
            <div className="flex flex-col items-center text-center space-y-4">
                <SamLogo className="w-16 h-16 text-gray-400" />
                <h2 className="text-4xl font-bold text-white">Hola, SAM</h2>
                <p className="text-lg text-gray-400">¿Cómo puedo ayudarte hoy?</p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-8 px-2">
                {features.map((feature, index) => (
                    <FeatureButton key={feature.name} {...feature} delay={100 * index + 800} />
                ))}
            </div>

            <div className="w-full mt-auto pt-6">
                <div className="bg-gray-800/80 border border-gray-700 rounded-2xl p-3 flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <MenuIcon className="h-6 w-6 text-gray-400" />
                        <div className="bg-indigo-600 rounded-full p-1">
                            <PlusIcon className="h-6 w-6 text-white" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                            <SparklesIcon className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium text-gray-300">2.5 Flash</span>
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <p className="text-gray-500">Pregunta a SAM</p>
                    </div>
                    <button className="bg-indigo-600 rounded-full p-3 hover:bg-indigo-500 transition-colors duration-300">
                        <SendIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16 px-4 overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <div
                    className="fade-in-up"
                    style={{ animationDelay: '200ms' }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-white">SAM IA</span> ya está aquí.
                    </h1>
                </div>

                <div
                    className="fade-in-up"
                    style={{ animationDelay: '400ms' }}
                >
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        Descubre la nueva era de la inteligencia artificial. Creada por Samuel Casseres y su empresa SAM verce para potenciar tu creatividad y productividad.
                    </p>
                </div>

                <div
                    className="fade-in-up mt-10"
                    style={{ animationDelay: '600ms' }}
                >
                    <a href="https://samia-com.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105">
                        Únete a la revolución
                    </a>
                </div>

                <div
                    className="fade-in-up"
                    style={{ animationDelay: '800ms' }}
                >
                    <UIMockup />
                </div>
            </div>
        </section>
    );
};

export default Hero;