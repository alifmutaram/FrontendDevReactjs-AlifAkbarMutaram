import { DropdownButton, Table, Dropdown, Form, Button } from "react-bootstrap";
import "../style.css";
import CardRestaurant from "../CardRestaurant";
import { useEffect, useState } from "react";

const Section = () => {
  const [datas, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((respon) => setData(respon));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section-div">
      <Table className="mt-3" bordered>
        <tbody>
          <tr
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="form">
              <div className="form-radio">
                <h9 className="me-2">Filter By :</h9>
                <Form className="me-2 ">
                  <Form.Check type="radio" label="Open Now" />
                </Form>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Form.Select size="sm" className="select">
                  <option>Price</option>
                  <option value="1">1 - 50</option>
                  <option value="2">50 - 100</option>
                  <option value="3">100 - 200</option>
                </Form.Select>
                <Form.Select size="sm" className="select">
                  <option>Categories</option>
                  <option value="1">1 - 50</option>
                  <option value="2">50 - 100</option>
                  <option value="3">100 - 200</option>
                </Form.Select>
              </div>
            </div>
            <div>
              <Button className="clear-btn">CLEAR ALL</Button>
            </div>
          </tr>
        </tbody>
      </Table>
      <h2>All Restaurants</h2>
      <div className="card-result">
        {datas.map(({ id, img, name, dsc, price, rate, country }) => {
          return (
            <div>
              <CardRestaurant
                name={name}
                img={img}
                location={country}
                price={price}
                desc={dsc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
