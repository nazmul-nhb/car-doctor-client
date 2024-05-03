import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Home - Car Doctor</title>
            </Helmet>
            <Banner />
        </main>
    );
};

export default Home;