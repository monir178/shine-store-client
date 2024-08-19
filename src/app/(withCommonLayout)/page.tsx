import Banner from "./components/page/home/Banner";
import CategorySection from "./components/page/home/CategorySection";
import FlashSaleSection from "./components/page/home/FlashSaleSection";
import TrendingProducts from "./components/page/home/TrendingProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategorySection />
      <FlashSaleSection />
      <TrendingProducts />
    </div>
  );
};

export default Home;
