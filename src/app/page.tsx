import { MoviesList } from "@/modules/movies/components/MovieList";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl flex min-h-screen flex-col items-center justify-between p-24">
      <MoviesList />
    </main>
  );
}
