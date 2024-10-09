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
                  <DropdownButton
                    className="dropdown me-2"
                    variant="white"
                    title="Price"
                  >
                    <Dropdown.Item href="#/action-1"></Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    className="dropdown"
                    variant="white"
                    title="Categories"
                    mr-2
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
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
