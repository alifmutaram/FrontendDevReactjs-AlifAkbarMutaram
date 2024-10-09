import {
  Container,
  Table,
  Dropdown,
  Form,
  DropdownButton,
  Button,
} from "react-bootstrap";
const RestaurantDetail = () => {
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
                      <option>1 - 50</option>
                      <option>50 - 100</option>
                      <option>100 - 20</option>
                    </Form.Select>
                  </div>
                </div>
                <div>
                  <Button className="clear-btn">CLEAR ALL</Button>
                </div>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default RestaurantDetail;
