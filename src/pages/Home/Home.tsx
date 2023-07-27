import ButtonArea from "../../components/ButtonArea/ButtonArea";
import NavPane from "../../components/NavPane/NavPane";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="nav-pane-container">
        <NavPane />
      </div>
      <div className="button-area-container">
        <ButtonArea />
      </div>
    </div>
  );
};

export default Home;
