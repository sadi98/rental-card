import NavigationBar from '../components/NavigationBar';
import PageHeader from '../components/PageHeader';
import OurService from '../components/OurService';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import CarRental from '../components/CarRental';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const Index = () => {
    return (
        
        <div>
            {/* Navbar */}
            <div>
                <NavigationBar />
            </div>
            {/* End Navbar  */}
            {/* PageHeader  */}
            <div>
                <PageHeader />
            </div>
            {/* End PageHeader  */}
            {/* OurService  */}
            <div>
                <OurService />
            </div>
            {/* End OurService  */}
            {/* WhyUs  */}
            <div>
                <WhyUs />
            </div>
            {/* End WhyUs  */}
            {/* Testimonial  */}
            <div>
                <Testimonial />
            </div>
            {/* End Testimonial  */}
            {/* CarRental  */}
            <div>
                <CarRental />
            </div>
            {/* End CarRental  */}
            {/* Faq  */}
            <div>
                <Faq />
            </div>
            {/* End Faq  */}
            {/* Footer  */}
            <div>
                <Footer />
            </div>
            {/* End Footer  */}
        </div>
    );
}

export default Index;
