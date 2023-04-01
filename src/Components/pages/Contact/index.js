import React from "react";
import { Container, Card, Form, Stack, Image } from "react-bootstrap";
import logo from "../../Assets/logo.png";

const Contact = () => {
  return (
    <Container>
      <Image
        variant="top"
        style={{
          width: "100%",
          height: "270px",
          objectFit: "cover",
          objectPosition: "0 85%",
          borderRadius:"10px"
        }}
        src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/296180768_5313305695422892_8752540119722655407_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sU4rl6uGiHUAX-wkRnR&_nc_ht=scontent-sea1-1.xx&oh=00_AfBNetY951c-E7JOQTQCPfXUY4vYdIroQfY8GRfEd5PMLA&oe=642CA055"
      />
      <Stack direction="horizontal" gap={5} className="text-center mb-3">
        <Image
          className="profileImg"
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/82945828_2690013414418813_5044555916557418496_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=svH7IhOUEZ8AX_-O6eT&_nc_ht=scontent-sea1-1.xx&oh=00_AfAA0QFh5pygIpNqiBEeWNVPrt3EQ1CgccOvLWQkHvOVvQ&oe=644EFF78"
        ></Image>
          <Card.Text>-I capture the endless moments 📸</Card.Text>
      </Stack>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Text className="text-muted">Email</Form.Text>
        <br></br>
        <Form.Label>lexartiemedia@gmail.com</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Text className="text-muted">Phone Number</Form.Text>
        <br></br>
        <Form.Label>(425) 577-1387</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Text className="text-muted">Social Media</Form.Text>
        <br></br>
        <Stack gap={3}>
          <Stack direction="horizontal" gap={3}>
            <a href="https://www.facebook.com/lexArtieMedia" target="_blank">
              <Image
                src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                className="footerlogo"
              ></Image>
            </a>
            <a href="https://www.facebook.com/lexArtieMedia" target="_blank">
              <Form.Label>@lexArtieMedia · Photographer</Form.Label>
            </a>
          </Stack>

          <Stack direction="horizontal" gap={3}>
            <a
              href="https://www.instagram.com/hi_alexdabao/?igshid=ZjE2NGZiNDQ%3D"
              target="_blank"
            >
              <Image
                src="https://www.theexaminernews.com/examiner-news/wp-content/uploads/2021/09/instagram-logo-transparent.png"
                className="footerlogo"
              ></Image>
            </a>
            <a
              href="https://www.instagram.com/hi_alexdabao/?igshid=ZjE2NGZiNDQ%3D"
              target="_blank"
            >
              <Form.Label>@hi_alexdabao</Form.Label>
            </a>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <a href="https://www.tiktok.com/@hi_alexdabao" target="_blank">
              <Image
                src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjkwOC1jYS03Ml8xLnBuZw.png"
                className="footerlogo"
              ></Image>
            </a>
            <a href="https://www.tiktok.com/@hi_alexdabao" target="_blank">
              <Form.Label>@hi_alexdabao</Form.Label>
            </a>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <a
              href="https://lexartie.pic-time.com/portfolio?fbclid=IwAR1rGBEaQDX04ALAA0pR0G1ZP356UXp3NYOnRf1_nyXhBytY0CiE0EQ1bRs"
              target="_blank"
            >
              <Image src={logo} className="footerlogo"></Image>
            </a>
            <a
              href="https://lexartie.pic-time.com/portfolio?fbclid=IwAR1rGBEaQDX04ALAA0pR0G1ZP356UXp3NYOnRf1_nyXhBytY0CiE0EQ1bRs"
              target="_blank"
            >
              <Form.Label>@LEX ARTIE PHOTOGRAPHY</Form.Label>
            </a>
          </Stack>
        </Stack>
      </Form.Group>
    </Container>
  );
};

export default Contact;
