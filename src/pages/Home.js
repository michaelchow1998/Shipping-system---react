import HeroSection from "../components/home/HeroSection";
import FeatureSession from "../components/home/FeatureSession";
import LogoClouds from "../components/home/LogoClouds";
import Footer from "../components/Footer";

function Home({ isLogin }) {
  return (
    <div className="">
      <HeroSection isLogin={isLogin} />
      <FeatureSession />
      <LogoClouds />
      <Footer />
    </div>
  );
}

export default Home;
