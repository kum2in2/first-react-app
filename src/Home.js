import React from "react"; 
import Navbar from "./Navbar";
import Header from "./Header";
import Services from "./Services";
import AboutSection from "./AboutSection";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const Home = () => {
return(
  <>
   <Navbar />
   <Header />
    <Services />
    <AboutSection />
    <ContactUs />
    <Footer />
  </>
);
};

export default Home;