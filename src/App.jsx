import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <footer className="py-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Vandan Raval. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
