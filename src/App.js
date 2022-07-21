import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Anime from "./components/Anime";
import Manga from "./components/Manga";
import AllList from "./components/AllList";
import ScroolTop from "./components/ScroolTop";
import Footer from "./components/Footer";
import { Fragment } from "react";
import "./style/landingpage.css";

function App() {
  return (
    <Fragment>
      <div>
        <div className="myBG border">
          {/* Navbar */}
          <NavigationBar />
          {/* End Navbar */}
          {/* intro */}
          <Intro />
          {/* end intro */}
        </div>

        {/* Trending Anime */}
        <div className="trendingAnime">
          <Anime />
        </div>
        {/* Trending End */}

        {/* Trending Manga */}
        <div className="trendingManga">
          <Manga />
        </div>
        {/* Trending End */}

        {/* All List */}
        <div className="allList">
          <AllList />
        </div>
        {/* All List End */}

        <div>
          <Footer />
        </div>
      </div>

      <ScroolTop />
    </Fragment>
  );
}

export default App;
