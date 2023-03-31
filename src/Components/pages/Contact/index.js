import React from "react";
import { Container, Card, Form, Stack, Image } from "react-bootstrap";
import logo from "../../Assets/logo.png"

const Contact = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
          I capture the endless moments 📸
          </Card.Text>
        </Card.Body>
      </Card>
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
          <Stack direction="horizontal" gap={3} >
            <a href="https://www.facebook.com/lexArtieMedia" target="_blank">
              <Image
                src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                className="footerlogo"
              ></Image>
            </a>
            <a href="https://www.facebook.com/lexArtieMedia" target="_blank"><Form.Label>@lexArtieMedia · Photographer</Form.Label></a>
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
            ><Form.Label>@hi_alexdabao</Form.Label></a>
          </Stack>
          <Stack direction="horizontal" gap={3}>
          <a  href="https://www.tiktok.com/@hi_alexdabao" target="_blank">
            <Image
              src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjkwOC1jYS03Ml8xLnBuZw.png"
              className="footerlogo"
            ></Image>
          </a>
          <a  href="https://www.tiktok.com/@hi_alexdabao" target="_blank"><Form.Label>@hi_alexdabao</Form.Label></a>
          </Stack>
          <Stack direction="horizontal" gap={3}>
          <a  href="https://lexartie.pic-time.com/portfolio?fbclid=IwAR1rGBEaQDX04ALAA0pR0G1ZP356UXp3NYOnRf1_nyXhBytY0CiE0EQ1bRs" target="_blank" >
            <Image
              src={logo}
              className="footerlogo"
            ></Image>
          </a>
          <a  href="https://lexartie.pic-time.com/portfolio?fbclid=IwAR1rGBEaQDX04ALAA0pR0G1ZP356UXp3NYOnRf1_nyXhBytY0CiE0EQ1bRs" target="_blank" ><Form.Label>@LEX ARTIE PHOTOGRAPHY</Form.Label></a>
          </Stack>
        </Stack>
      </Form.Group>
    </Container>
  );
};

export default Contact;
