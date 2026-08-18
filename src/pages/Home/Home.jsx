import Banner from "../Banner/Banner";
import Brands from "./Brands/Brands";
import Services from "./Services/Services";
import Works from "./Works/Works";

const Home = () => {
  return (
    <div className="container mx-auto space-y-4">
      <Banner />

      <Works />

      <Services />

      <Brands />
    </div>
  );
};

export default Home;