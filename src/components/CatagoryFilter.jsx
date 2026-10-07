function CategoryFilter() {

  const categories = [
    "All",
    "Accounting & Finance",
    "AI",
    "Backend Development",
    "Cloud Computing",
    "Data Science",
    "Digital Marketing",
    "Entrepreneurship",
    "Freelancing",
    "Frontend Development",
    "Game Development",
    "Graphic Design",
    "Microsoft Office",
    "Mobile Development",
    "UI/UX Design",
    "Video Editing & Animation",
    "Web Development",
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">

        {categories.map((category, index) => (
          <button
            key={category}
            className={`
              rounded-full
              border
              px-4
              py-2
              text-sm
              transition
              ${
                index === 0
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-sky-300 hover:text-sky-500"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
}

export default CategoryFilter;