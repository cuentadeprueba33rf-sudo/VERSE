import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PurposeSection from './components/PurposeSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="relative bg-black text-gray-100 antialiased overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full filter blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-indigo-900/40 rounded-full filter blur-[150px] animate-pulse [animation-delay:2s]"></div>
            </div>

            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <AboutSection />
                    <PurposeSection />
                    <FeaturesSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
