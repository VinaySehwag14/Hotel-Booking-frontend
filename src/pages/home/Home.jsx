// import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
// import Navbar from "../../components/navbar/Navbar";
// import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/Navbar";
// import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="mt-12 flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="w-[1024px] text-xl">Browse by property type</h1>
        {/* <PropertyList /> */}
        <h1 className="w-[1024px] text-xl">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
