import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">RIQ ANIME & MANGA</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trendingAnime">ANIME</Nav.Link>
            <Nav.Link href="#trendingManga">MANGA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
