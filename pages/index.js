import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import WorkExp from "../components/WorkExp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rohan Ahire</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <About />
        <Projects />
        <WorkExp />
        <Contact />
      </main>
    </div>
  );
}
