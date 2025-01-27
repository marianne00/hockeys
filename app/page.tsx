
// import Swiper from "swiper";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Club from "./sections/Club";
import Contact from "./sections/Contact";
import Inquiries from "./sections/Inquiries";
import Products from "./sections/Products";
import Programs from "./sections/Programs";



export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Club />
      <Programs />
      <Products />
      <Inquiries />
      <Contact />
    </>
  );
}
