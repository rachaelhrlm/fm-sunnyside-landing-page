import { GridRow, Header, Image, ImageTile, Navbar, TextTile } from './components';

export const App = () => {
    return (
        <>
            <header className="relative">
                <Navbar />
                <Header />
            </header>

            <main>
                <GridRow direction="flex-col-reverse">
                    <TextTile
                        color="yellow"
                        message="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
                        compelling visuals that do most of the marketing for you."
                        title="Transform your brand"
                    />
                    <ImageTile color="yellow" title="Transform your brand" image="transform" />
                </GridRow>
                <GridRow>
                    <ImageTile color="red" position="bottom" title="Stand out to the right audience" image="stand-out" />
                    <TextTile
                        color="red"
                        message="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                        title="Stand out to the right audience"
                    />
                </GridRow>
            </main>
        </>
    );
};
