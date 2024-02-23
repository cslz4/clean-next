import { MovieCard } from "@/modules/movies/components/MovieCard";
import { getMovies } from "@/modules/movies/services";

export const MoviesList: React.FC = async () => {
  const { data } = await getMovies({ page: 1 });

  return (
    <div className="grid grid-cols-3">
      {data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};
