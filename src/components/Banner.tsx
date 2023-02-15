import { baseUrl } from "constants/movie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie } from "typing";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { modalState, movieState } from "atoms/modalAtom";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:px-4 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title as string}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl lg:mb-3 ">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs font-medium text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl mb-2 lg:mb-4">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="banner-btn bg-white text-black">
          <FaPlay className="w-4 h-4 text-black md:w-7 md:h-7" /> Play
        </button>
        <button
          className="banner-btn bg-[gray]/70"
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie);
          }}>
          <InformationCircleIcon className="h-5 w-5 md:w-8 md:h-8" />
          More Info
        </button>
      </div>
    </div>
  );
}

export default Banner;
