import { Container } from "react-bootstrap";
// import "./App.css";
import "../style.css";
import Section from "../SectionRestaurant/section";
const HomePage = () => {
  return (
    <>
      <div className="mt-3">
        <Container>
          <h1 className="title-name">Restaurants</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            libero, maximus eget lobortis vel, auctor sed arcu. Nunc tellus
            nisi, ullamcorper ac magna quis,
          </h5>
          <Section />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
