import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import Geography from "./components/Geography";
import Economy from "./components/Economy";
import Landmarks from "./components/Landmarks";
import Identity from "./components/Identity";
import Trivia from "./components/Trivia";
import Footer from "./components/Footer";
import RevealController from "./components/RevealController";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trivia />
        <About />
        <History />
        <Geography />
        <Economy />
        <Landmarks />
        <Identity />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
