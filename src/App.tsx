import { About, Footer, Gallery, Header, Navbar, Services, Testimonials } from './components';

export const App = () => {
    return (
        <>
            <header className="relative">
                <Navbar />
                <Header />
            </header>

            <main>
                <About />
                <Services />
                <Testimonials />
                <Gallery />
            </main>
            <Footer />
        </>
    );
};
