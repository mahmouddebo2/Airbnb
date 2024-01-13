import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Live from "./components/Live";
import image from "@/public/createst.jpg";
import Greatest from "./components/Greatest";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <>
  <Header/>
  <div>
      <Banner />
      <Explore />
      <Live />
      <Greatest
        img="https://images.pexels.com/photos/4993220/pexels-photo-4993220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="The Greatest Outdoors"
        description="Wishlist curated by Airbnb"
        linkText="Get Inspired"
      />
    </div>
    <Footer/>
  </>
  );
}
