import './App.css';
import NavigationBar from "./components/NavigationBar";
import PageHeader from "./components/PageHeader";
import BestCar from "./components/BestCar";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import CarRental from "./components/CarRental";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import './style/pageHeader.css';
import './style/navigationBar.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <NavigationBar/>
      </div>
      {/* End Navbar  */}
      {/* PageHeader  */}
      <div>
        <PageHeader/>
      </div>
      {/* End PageHeader  */}
      {/* BestCar  */}
      <div>
        <BestCar/>
      </div>
      {/* End BestCar  */}
      {/* WhyUs  */}
      <div>
        <WhyUs/>
      </div>
      {/* End WhyUs  */}
      {/* Testimonial  */}
      <div>
        <Testimonial/>
      </div>
      {/* End Testimonial  */}
      {/* CarRental  */}
      <div>
        <CarRental/>
      </div>
      {/* End CarRental  */}
      {/* Faq  */}
      <div>
        <Faq/>
      </div>
      {/* End Faq  */}
      {/* Footer  */}
      <div>
        <Footer/>
      </div>
      {/* End Footer  */}
    </div>
  );
}

export default App;
