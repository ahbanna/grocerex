import Image from "next/image";
import Banner from "./Banner/Banner";

const HomePage = () => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    <main>
      <Banner></Banner>
      <h2>This is home page</h2>
    </main>
  );
};
export default HomePage;
