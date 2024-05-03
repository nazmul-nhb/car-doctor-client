import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Services from "./Services/Services";

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Home - Car Doctor</title>
            </Helmet>
            <Banner />
            <About />
            <Services/>
        </main>
    );
};

export default Home;