import React from "react";
import { Image,Container } from "react-bootstrap";
import wedding from "../../Assets/wedding.png";

const Wedding = () => {
  return (
    <div className="booking">
      <Image
        variant="top"
        style={{
          width: "100%",
          height: "270px",
          objectFit: "cover",
          objectPosition: "0 59%",
          borderRadius: "10px",
        }}
        src={wedding}
      />
      <Container className="booknow">
        {" "}
        <h1>Wedding</h1>
        <Image
          src="https://www.freepnglogos.com/uploads/photography-logo-png/rules-for-acquiring-effective-photography-logo-design-27.png"
          className="cameraphoto"
        ></Image>
      </Container>
    </div>
  );
};

export default Wedding;
