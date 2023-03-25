import Footer from "../components/Footer";
import FormCar from "../components/FormCar";
import NavigationBar from "../components/NavigationBar";
import PageHeader from "../components/PageHeader";

const Search = () => {
    return (
        <>
            <NavigationBar />
            <PageHeader showButton={false}/>
            <FormCar/>
            <Footer marginTop={80}/>
        </>
    )
}

export default Search;