import React from 'react'
import Navbar from "./components/Navbar";
import BlogHero from "./components/BlogHero";
import CatagoryFilter from "./components/CatagoryFilter";
import BlogCard from "./components/BlogCard";
import BlogSection from './components/BlogSection';
import Banner from './components/Banner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />
      <CatagoryFilter />
      <BlogCard />
      <BlogSection />
      <Banner/>
     < Footer/>
    </div>
  )
}
