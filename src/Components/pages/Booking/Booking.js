import React from "react";
import Datepicker from "../../Datepicker";
import {
  Image,
  Container,
  InputGroup,
  DropdownButton,
  Dropdown,
  Stack,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Booking/style.css";

const Booking = () => {
  return (
    <div className="booking">
        <Image
          variant="top"
          style={{
            width: "100%",
            height: "270px",
            objectFit: "cover",
            objectPosition: "0 57%",
            borderRadius: "10px",
          }}
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/123651545_3440605132692967_7398880758766860637_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=r1YKopiqwWsAX9Ae1wt&_nc_ht=scontent-sea1-1.xx&oh=00_AfC7ZfaH5OJnDgm88VZsDsI-Hid7V7G59pY4SuJHXWwGvA&oe=645029E3"
        />

      <Container className="booknow">
        {" "}
        <h1>Book Now</h1>
        <Image
          src="https://www.freepnglogos.com/uploads/photography-logo-png/rules-for-acquiring-effective-photography-logo-design-27.png"
          className="cameraphoto"
        ></Image>
      </Container>
        <Card className="text-center bookingCard">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="string" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              {" "}
              <Form.Label>Phone Number</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+1</InputGroup.Text>
                <Form.Control
                  placeholder="Phonenumber"
                  aria-label="Phonenumber"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Project Date</Form.Label>
              <Datepicker />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <DropdownButton
                variant="outline-secondary"
                title="Portrait"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">Portrait</Dropdown.Item>
                <Dropdown.Item href="#">Engagement/Prewedding</Dropdown.Item>
                <Dropdown.Item href="#">Wedding</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Others</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmailp">
              <Form.Label>Special Requirement</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Click
            </Button>
          </Form>
        </Card>
    </div>
  );
};

export default Booking;
