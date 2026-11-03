import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

//INI SPEC-001 - 06
// Componente raíz de la aplicación integrando todos los módulos
export const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
//FIN SPEC-001 - 06
