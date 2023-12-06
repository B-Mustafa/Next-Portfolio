"use client";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <BaseLayout>
    <section className="hero-container">
      
      <div className="hero-content-container">
        <div className="hero-content">
          <div className="text">
            <h1>Hi, I&apos;m Mustafa ,</h1>
            <span className="red-font">Developer</span>
            <h2>From India</h2>
            <p className="p-text">
              Full stack developer. Coffee-fueled coder. Pizza-powered problem solver. Embracing new tech with a smile.&apos;
            </p>
          </div>

          <div className="links">
            <Link href="/projects">
              <button className="btn-main">
                Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-main">
                Let&apos;s Talk
              </button>
            </Link>
          </div>
        </div>
        <Image src="/assets/sidemenu.jpg" width={300} height={400} alt="Mustafa Bhikhapurwala" className="img z-10" />
      </div>

       <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> 
    </section>
    <Footer/>
    </BaseLayout>
  );
};

export default Home;
