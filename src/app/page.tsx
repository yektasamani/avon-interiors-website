import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
/* 
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer"; */

export default function Home() {
    return (
        <main>
            <Nav />
            <Hero />
            <Story />
            <About />
            {/*<Portfolio />
            <Services />
            <Process />
            <Testimonial />
            <Footer /> */}
        </main>
    );
}
