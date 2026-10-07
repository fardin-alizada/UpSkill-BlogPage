function BlogCard({ image, category, title, description, date }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <p className="mb-3 text-sm font-medium text-sky-500">
          {category}
        </p>

        <h2 className="mb-3 text-xl font-bold leading-7 text-slate-700">
          {title}
        </h2>

        <p className="mb-6 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            📅 {date}
          </span>

          <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;