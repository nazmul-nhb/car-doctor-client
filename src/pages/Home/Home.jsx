import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import About from "./About/About";

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Home - Car Doctor</title>
            </Helmet>
            <Banner />
            <About />
        </main>
    );
};

export default Home;