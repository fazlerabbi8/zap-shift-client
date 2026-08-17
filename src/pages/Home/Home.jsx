import Banner from "../Banner/Banner";
import Services from "./Services/Services";
import Works from "./Works/Works";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <div className="container">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;