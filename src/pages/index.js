import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

import { about as aboutData, discover as discoverData, signup as signupData } from '../components/InfoSection/Data';
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...aboutData} />
            <InfoSection {...discoverData} />
            <Services />
            <InfoSection {...signupData} />
            <Footer />
        </>
    )
}

export default Home;