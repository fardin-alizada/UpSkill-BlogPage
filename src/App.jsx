
import {
  Navbar,
  BlogHero,
  CategoryFilter,
  BlogSection,
  Banner,
  Footer,
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHero />
      <CategoryFilter/>
      <BlogCard />
      <BlogSection />
      <Banner/>
     < Footer/>
    </div>
  )
}
