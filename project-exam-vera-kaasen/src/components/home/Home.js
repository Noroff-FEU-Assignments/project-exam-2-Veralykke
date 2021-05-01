import { Container } from "react-bootstrap";
//import Jumbotron from 'react-bootstrap/Jumbotron'
import Search from "../search/Search";

export default function Home() {
  return (
    <>
      <Container className="home-container">
        <img src="/images/bergen.jpg" className="img-fluid"></img>
        <p className="txt-home">We bring</p>
        <h1 className="h1-home">Bergen</h1>
        <p className="txt-home">To you</p>
        <Search />
      </Container>
    </>
  );
}
