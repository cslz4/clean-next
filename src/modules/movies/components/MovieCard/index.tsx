"use client";

import { Movie } from "@/entities";
import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="text-white p-5">
      <div className="bg-yellow-500 p-8">
        <Image
          className="w-[100%] h-[400px] object-contain"
          src={`/assets/posters/${movie.id}.jpg`}
          alt="poster"
          width={400}
          height={400}
        />
      </div>

      <div className="flex items-center">
        <h2 className="text-xl py-8 flex-1">{movie.title}</h2>
        <button
          className="flex-0 text-3xl p-4"
          onClick={() => setFavorited((prevState) => !prevState)}
        >
          <Star
            className="text-yellow-500"
            weight={favorited ? "fill" : "regular"}
          />
        </button>
      </div>
      <p>{movie.description}</p>
    </div>
  );
};
