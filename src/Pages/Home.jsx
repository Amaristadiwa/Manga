import React from "react";
import Header from "../assets/components/Header";
import Navbar from "../assets/components/Navbar/Navbar";
import ComicCard from "../assets/components/ComicCard";
import Footer from "../assets/components/Footer/Footer";
import "../styles.css";

const comics = [
  { title: "Solo Leveling", image: "https://i.pinimg.com/736x/2d/66/14/2d6614fc8d3689e43155570e3f2ec979.jpg" },
  { title: "Only for love", image: "https://i.pinimg.com/736x/37/e3/cb/37e3cbaea034541f78bbfc5c83fde47c.jpg" },
  { title: "Temptest night", image: "https://i.pinimg.com/736x/90/13/5a/90135aed780d6a089e3c6b2d7b571696.jpg" },
  { title: "The Breaker", image: "https://i.pinimg.com/736x/56/9b/3d/569b3dffeec664ec2f2501c1787f15d1.jpg" },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Header />
      <main className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {comics.map((comic, index) => (
          <ComicCard key={index} title={comic.title} image={comic.image} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

