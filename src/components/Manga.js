import { Image, Card, Row, Col, Container } from "react-bootstrap";
import onepiece from "../assets/images/manga/onepiece.jpg";
import chain from "../assets/images/manga/chain.jpg";
import vinland from "../assets/images/manga/vinland.png";

const Manga = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="trendingManga">
          TRENDING MANGA
        </h1>

        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={onepiece} alt="One Piece" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">One Piece</Card.Title>
                  <Card.Text className="text-left">
                    Manga tentang bajak laut super power yang mencari harta
                    karun.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={chain} alt="Chainsaw Man" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Chainsaw Man</Card.Title>
                  <Card.Text className="text-left">
                    Manga tentang orang yang dapat beruh menjadi mesin pemotong
                    pohon!!. Whoff
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action, Comedy, & Fantasy
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={vinland} alt="Vinland Saga" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Vinland Saga</Card.Title>
                  <Card.Text className="text-left">
                    Manga tentang anak yang bapaknya dibunuh, anaknya malah ikut
                    si pembunuh.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action & Adventure
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Manga;
