import Banner from "../Banner/Banner";
import Brands from "./Brands/Brands";
import FreqAsk from "./FreqAsk/FreqAsk";
import OurQuality from "./OurQuality/OurQuality";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import Works from "./Works/Works";

const reviewsData = fetch('/reviews.json')
.then(res => res.json())

const Home = () => {
  return (
    <div className="container mx-auto space-y-4">
      <Banner />

      <Works />

      <Services />

      <Brands />

      <OurQuality />

       <Reviews reviewsData = {reviewsData}/>

      <FreqAsk />
    </div>
  );
};

export default Home;