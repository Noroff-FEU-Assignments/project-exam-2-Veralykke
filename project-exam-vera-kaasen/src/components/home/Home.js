import Search from "../search/Search";

export default function Home() {
  return (
    <>
      <div
        className="image-home"
        alt="Picture of Bergen city, Credit: User of Unsplash: ZHANG Shaoqi"
      >
        <h3 className="h3-home">HOLIDAZE</h3>
        <h1 className="h1-home">Hotels in Bergen</h1>
        <Search className="mr-sm-2" />
      </div>
    </>
  );
}
