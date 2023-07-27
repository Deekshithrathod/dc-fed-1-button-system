import ButtonArea from "../../components/ButtonArea/ButtonArea";
import NavPane from "../../components/NavPane/NavPane";
import "./ButtonHome.css";

const ButtonHome = () => {
  return (
    <>
      <div className="container">
        <NavPane />
        <main>
          <ButtonArea />
        </main>
      </div>
    </>
  );
};

export default ButtonHome;
