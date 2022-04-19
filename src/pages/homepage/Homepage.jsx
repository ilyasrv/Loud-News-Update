import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Footer from "./../../components/Footer/footer";
import "./homepage.css";
import Slider from "./../../components/MySlider/MySlider";

let slides = [
  {
    img:
      "https://github.com/ilyasrv/Loud-News/blob/master1/assets/images/%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(8).png?raw=true",
    text: "Caption Text 1"
  },
  {
    img:
      "https://raw.githubusercontent.com/ilyasrv/Loud-News/master1/assets/images/post1.png",
    text: "Caption Text 2"
  },
  {
    img:
      "https://github.com/ilyasrv/Loud-News/blob/master1/assets/images/%D0%98%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20(8).png?raw=true",
    text: "Caption Text 3"
  }
];

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="home">
        <Header />
        <Slider
          slides={slides}
          loop={true}
          navs={true}
          auto={true}
          pags={true}
          delay={3}
        />
        <Posts />
        <Footer />
      </div>
    </>
  );
}
