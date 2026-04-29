import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* 
import Portfolio from "@/components/Portfolio";

import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
*/

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <Story />
            <About />
            <Services />
            <Contact />
            <Footer />
            {/*<Portfolio />
            
            <Process />
            <Testimonial />
             */}
        </main>
    );
}
