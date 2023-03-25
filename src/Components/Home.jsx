import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home