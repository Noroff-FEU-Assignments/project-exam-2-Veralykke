import Search from "../search/Search";

export default function Home() {
  return (
    <>
      <div
        className="image-home"
        alt="Picture of Bergen city, Credit: User of Unsplash: ZHANG Shaoqi">
        <div className="text-home">
        <h3 className="h3-home">HOLIDAZE</h3>
        <h1 className="h1-home">Hotels in Bergen</h1>
        </div>
        <Search className="mr-sm-2" />
      </div>
    </>
  );
}
