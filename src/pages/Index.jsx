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
            <section id="pageheader">
                <PageHeader />
            </section>
            {/* End PageHeader  */}
            {/* OurService  */}
            <section id="ourservices">
                <OurService />
            </section>
            {/* End OurService  */}
            {/* WhyUs  */}
            <section id="whyus">
                <WhyUs />
            </section>
            {/* End WhyUs  */}
            {/* Testimonial  */}
            <section id="testimonial">
                <Testimonial />
            </section>
            {/* End Testimonial  */}
            {/* CarRental  */}
            <section id="carrental">
                <CarRental />
            </section>
            {/* End CarRental  */}
            {/* Faq  */}
            <div id="faq">
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
