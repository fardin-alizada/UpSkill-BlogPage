
import{Banner,BlogCard,BlogHero,BlogSection,CategoryFilter,Footer,Navbar}from"../src/components/index.js";
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />
      <CategoryFilter />
      <BlogCard />
      <BlogSection />
      <Banner/>
     < Footer/>
    </div>
  )
}
