import Footer from "../../components/Footer.jsx";
import NavBar from "../../components/NavBar.jsx";
import img from "../../assets/headphone.png";
import img2 from "../../assets/speaker.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import hero from "../../assets/hero.png";
import Banner from "../../assets/banner.png";
import ItemGroup from "../../components/itemGroup.jsx";
import ItemBarGroup from "../../components/itemBarGroup.jsx";
import ProductGrid from "../../components/ProductGrid.jsx";
import "../../App.css";

const Home = () => {
  return (
    <>
      <NavBar />

      <section className="Banner">
        <img src={Banner} alt="Banner" />
        <div className="group-wrapper group-1">
          <ItemGroup
            title="Shop Headphones & Speakers"
            products={[img, img2, img3, img4]}
            link="test"
          />
        </div>
        <div className="group-wrapper group-2">
          <ItemGroup
            title="Shop Home & Kitchen"
            products={[img5, img6, img7, img8]}
            link="test"
          />
        </div>
        <div className="group-wrapper group-3">
          <ItemGroup
            title="Shop Books & Media"
            products={[hero, img5, img6, img7]}
            link="test"
          />
        </div>
      </section>

      <ProductGrid />
      <Footer />
    </>
  );
};

export default Home;
