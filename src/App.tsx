import { About, GridRow, Header, Image, ImageTile, Navbar, Services, ServiceTile } from './components';
import { Color } from './type';

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
            </main>
        </>
    );
};
