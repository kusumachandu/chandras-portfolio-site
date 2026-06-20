import Navbar     from "@/app/components/Navbar";
import Hero       from "@/app/components/Hero";
import About      from "@/app/components/About";
import Skills     from "@/app/components/Skills";
import Projects   from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact    from "@/app/components/Contact";
import Footer     from "@/app/components/Footer";
import Divider    from "@/app/components/Divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
