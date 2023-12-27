import Header from "./componets/Header";
import Hero from "./componets/Hero";
import GameBoard from "./componets/GameBoard";
import Footer from "./componets/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-indigo-800 text-sky-50 ">
        <Header />
        <Hero />
        <GameBoard />
        <Footer />
      </main>
    </>
  );
}
