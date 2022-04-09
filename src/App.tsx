import { About, GridRow, Header, Image, ImageTile, Navbar, Services, ServiceTile, TestimonialTile } from './components';
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
                <div className="bg-white text-center py-[4rem] flex flex-col">
                    <h1 className="uppercase font-serif text-sm text-neutral-blue4 tracking-[.2rem]">Client Testimonials</h1>
                    <GridRow>
                        <TestimonialTile
                            author="Emily R."
                            message="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                            role="Marketing Director"
                        />
                        <TestimonialTile
                            author="Thomas S."
                            message="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                            role="Chief Operating Officer"
                        />
                        <TestimonialTile
                            author="Jennie F."
                            message="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                            role="Business Owner"
                        />
                    </GridRow>
                </div>
            </main>
        </>
    );
};
