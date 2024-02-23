import { api } from "@/config/api";
import { GetMovies } from "@/modules/movies/models";

export const getMovies: GetMovies = async (params) => {
  const { data } = await api.get<ApiModel>("/films", {
    params: {
      page: params.page,
    },
  });

  return {
    page: params.page,
    nextPage: Number(data.next?.split("/").reverse()[1]),
    data: data.results.map((item) => ({
      id: item.url.split("/").reverse()[1],
      title: item.title,
      description: item.opening_crawl,
    })),
  };
};

type ApiModel = {
  count: number;
  next?: string;
  previous: string | null;
  results: {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }[];
};
