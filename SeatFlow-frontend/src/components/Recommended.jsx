import { movies } from "../utils/constants";

const Recommended = () => {
  return (
    <section className="w-full bg-white py-5 md:py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Recommended Movies
          </h2>
          <button
            type="button"
            className="text-sm md:text-base text-red-600 cursor-pointer hover:underline font-medium"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <article key={movie.id} className="min-w-0 cursor-pointer">
              <div className="overflow-hidden rounded-t-md">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-[230px] sm:h-[260px] md:h-[280px] object-cover"
                />
              </div>

              <div className="bg-black text-white text-xs sm:text-sm px-2 py-1.5 flex items-center justify-between gap-2">
                <span className="whitespace-nowrap">⭐ {movie.rating}/10</span>
                <span className="whitespace-nowrap">{movie.votes} Votes</span>
              </div>

              <div className="px-1.5 py-2">
                <h3 className="font-semibold text-sm md:text-base leading-6">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5 leading-5">
                  {movie.genre.replaceAll("/", " | ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
