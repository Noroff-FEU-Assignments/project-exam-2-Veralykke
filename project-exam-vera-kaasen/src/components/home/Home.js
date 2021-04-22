
import { Container } from "react-bootstrap";
import Search from "../search/Search";


export default function Home() {
  return (
    <>
      <Container>
      <figure className="position-relative">
        <p className="txt-home">We bring</p>
        <h1 className="h1-home">Bergen</h1>
        <p className="txt-home">To you</p>
       <Search />
      </figure>
        <img src="/images/bergen.jpg" className="img-fluid"></img>
      </Container>
      </>
  );
}








