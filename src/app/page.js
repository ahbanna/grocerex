import Image from "next/image";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";

const HomePage = () => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <main>
      <Banner></Banner>
      <Products></Products>
    </main>
  );
};
export default HomePage;
