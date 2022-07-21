import { Container, Row, Col, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center text-center ">
        <Row>
          <Col>
            <div className="title">NONTON ANIME </div>
            <div className="title colorIntro">BACA MANGA GRATIS</div>
            <div className="IntroButton mt-4 text-center">
              <Button variant="dark" href="#list">
                LIHAT SEMUA LIST ANIME & MANGA
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
