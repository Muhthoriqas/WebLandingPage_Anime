import { Image, Card, Row, Col, Container } from "react-bootstrap";
import spyImage from "../assets/images/trending/spyxfamily.png";
import aot from "../assets/images/trending/aot.png";
import ousama from "../assets/images/trending/ousama.jpg";
import kny from "../assets/images/trending/kny.jpg";
import tate from "../assets/images/trending/tate.jpg";
import mushoku from "../assets/images/trending/mushoku.png";

const Anime = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="trendingAnime">
          TRENDING ANIME
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image
                src={spyImage}
                alt="Spy X Family Anime"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spy X Family</Card.Title>
                  <Card.Text className="text-left">
                    Anime tentang keluarga, ayah mata-mata, ibu pembunuh dan
                    anak cenayang.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action & Comedy
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={aot} alt="Attack On Titan" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Attack On Titan
                  </Card.Title>
                  <Card.Text className="text-left">
                    Anima tentang manusia lawan titan dan misterinya gokil.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action & Drama
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={ousama} alt="Ousama Ranking" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Ousama Ranking
                  </Card.Title>
                  <Card.Text className="text-left">
                    Anime tentang anak titan yang kecil dan bayangan hitam.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action & Zero to Hero
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        {/* Row 2 */}
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={kny} alt="Kimetsu No Yaiba" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Kimetsu No Yaiba
                  </Card.Title>
                  <Card.Text className="text-left">
                    Anime tentang anak pembunuh iblis yang adiknya adalah iblis.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Action & Fantasy
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={mushoku} alt="Mushoku Tensei" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Mushoku Tensei
                  </Card.Title>
                  <Card.Text className="text-left">
                    Anime tentang Om-Om Nolep yang masuk ke isekai malah jadi
                    bocil.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Isekai & Fantasy
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={tate} alt="Tate No Yusha" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Tate No Yusha</Card.Title>
                  <Card.Text className="text-left">
                    Anime tentang orang yang masuk ke perpus malah masuk dunia
                    lain.
                  </Card.Text>
                  <Card.Text className="text-left colorGenre">
                    Genre: Isekai & Hero
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

export default Anime;
