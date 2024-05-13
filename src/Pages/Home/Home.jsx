import { Helmet } from "react-helmet-async";
import Faq from "../Faq/Faq";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Assignment|Home</title>
      </Helmet>
      <Banner />
      <Features />

      <Faq />
    </div>
  );
};

export default Home;
