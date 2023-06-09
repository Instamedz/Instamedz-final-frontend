import AppointProduct from "../../components/HomeComp/AppointProduct/AppointProduct";
import AppointService from "../../components/HomeComp/AppointService/AppointService";
import Footer from "../../components/Footer/Footer";
import HContact from "../../components/HomeComp/HContact.js/HContact";
import Hero from "../../components/HomeComp/Hero/Hero";
import Product from "../../components/HomeComp/Products/Product";
import Service from "../../components/HomeComp/Services/Service";
import Navbar from "../../components/Navbar/Navbar";
// import "./homepage2.css";
const Homepage = () => {
  return (
    <div className="homepage">
      {/* main */}
      <main>
      <Navbar/>
      {/*start hero container */}
        <Hero/>
        {/* end hero container */}
      
      <Service/>

      <AppointService/>

      <Product/>

      <AppointProduct/>
      
      <HContact/>
      <Footer/>

      </main>

      
      
    </div>
  );
};

export default Homepage;
