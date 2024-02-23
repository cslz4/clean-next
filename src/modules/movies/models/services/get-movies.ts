import { Movie } from "@/entities";

export type GetMoviesParams = {
  page: number;
};
export type GetMoviesModel = Paginated<Movie[]>;
export type GetMovies = (params: GetMoviesParams) => Promise<GetMoviesModel>;
