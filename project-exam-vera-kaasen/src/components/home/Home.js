import Search from "../search/Search";

export default function Home() {
  return (
    <>
      <div className="image-home container-fluid" alt="Picture of Bergen city, Credit: User of Unsplash: ZHANG Shaoqi">
        <p className="txt-home">We bring</p>
        <h1 className="h1-home">Bergen</h1>
        <p className="txt-home-two">To you</p>
        <Search />
      </div>
    </>
  );
}
