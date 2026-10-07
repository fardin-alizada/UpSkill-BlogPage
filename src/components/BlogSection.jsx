import BlogCard from "./BlogCard";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: "/public/images/icdl.png",
      category: "Microsoft Office",
      title: "Master Essential Computer Skills with the ICDL Program",
      description:
        "Build Your Digital Skills in Just 6 Months at Upskill Bootcamp",
      date: "Dec 09, 2025",
    },
    {
      id: 2,
      image: "/public/images/graphic.png",
      category: "Graphic Design",
      title: "Master Graphic Design in 6 Months at Upskill",
      description:
        "Turn Your Creativity Into a Professional Career.",
      date: "Dec 09, 2025",
    },
    {
      id: 3,
      image: "/public/images/founder.png",
      category: "Entrepreneurship",
      title: "Meet the Founder of Upskill Learning Center – Said Shah",
      description:
        "In a rapidly evolving digital world, access to quality education is more important than ever.",
      date: "Dec 09, 2025",
    },
    {
      id: 4,
      image: "/public/images/full stack.png",
      category: "Backend Development",
      title: "Full Stack Developer vs DevOps Engineer",
      description:
        "Full Stack Developer vs. DevOps Engineer: Key Differences Explained.",
      date: "Dec 09, 2025",
    },
    {
      id: 5,
      image: "/public/images/backend.png",
      category: "Backend Development",
      title: "Backend Development Program at Upskill",
      description:
        "Backend development is the powerhouse behind every website and application.",
      date: "Dec 09, 2025",
    },
    {
      id: 6,
      image: "/public/images/front end.png",
      category: "Frontend Development",
      title: "Learn Front-End Development at Upskill Online Academy",
      description:
        "Embarking on the journey of web development is like stepping into a world of creativity and innovation.",
      date: "Dec 09, 2025",
    },
  ];

  return (
    <section className="px-4 pt-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            description={blog.description}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;