import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CardRestaurant = ({ img, location, price, desc, name }) => {
  const { push } = useHistory();
  const handleOnClick = () => {
    push("/restaurant");
  };
  return (
    <div>
      <Card style={{ width: "16rem", border: "0px solid" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}.</Card.Text>
          <div className="card-title-name">
            <h6>{location}</h6>
            <h6>{price}</h6>
          </div>
          <Button onClick={() => handleOnClick()} className="button">
            LEARN MORE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardRestaurant;
