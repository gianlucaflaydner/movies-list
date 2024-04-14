import Image from "next/image";
import { MovieCardProps } from "./movie-card.types";
import useMediaContext from "@/hooks/use-media-context";

function MobileMovieCard({ movie }: MovieCardProps) {
  const { title, overview, poster, rating, releaseDate} = movie;

  return (
    <div className="w-full flex justify-center flex-col items-center h-fit px-8 py-4 gap-5 bg-blue-950 text-white rounded-lg">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={`Poster do filme ${title}`}
        width={400}
        height={1200}
      />
      <div className="flex justify-between">
        <h2 className="font-bold text-center text-xl">{title}</h2>
        <div className="flex items-center justify-center ">
            <Image
              src={"/rating-star.png"}
              alt="Estrela de avaliação"
              width={25}
              height={25}
            />
            <p className="text-sm">{rating}</p>
          </div>
      </div>
      <p className="text-sm text-justify tracking-tight">
        <b>Lançamento:</b> {releaseDate}
      </p>
      <p className="font-bold">
        Sinopse:
      </p>
      <p className="text-sm text-justify tracking-tight">
        {overview}
      </p>
    </div>
  );
}

function DesktopMovieCard({ movie }: MovieCardProps) {
  const { title, poster, rating, releaseDate, overview } = movie;

  return (
    <div className="xl:px-12 xl:py-8 w-full h-fit px-8 py-4 flex justify-between gap-8 items-center bg-blue-950 text-white rounded-lg">
      <div className="sm:w-[600px] xl:w-[800px] flex items-center flex-col gap-3">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={`Poster do filme ${title}`}
          width={400}
          height={1200}
        />
        <div className="flex justify-between flex-col gap-5 max-w-[400px] text-center">
          <h2 className="2xl:text-4xl xl:text-2xl font-bold">{title}</h2>
          <div className="flex items-center justify-center ">
            <Image
              src={"/rating-star.png"}
              alt="Estrela de avaliação"
              width={50}
              height={50}
            />
            <p className="2xl:text-2xl text-xl">{rating}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[1200px] text-left">
        <h2 className="xl:text-4xl font-bold text-xl text-left ">
          Data de lançamento: {releaseDate}
        </h2>
        <p className="2xl:text-4xl 2xl:tracking-wider xl:text-lg xl:leading-10 text-sm text-justify tracking-wide">
            <b>Sinopse:</b> {overview}
        </p>
      </div>
    </div>
  );
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { isDesktop } = useMediaContext();

  return isDesktop ? (
    <DesktopMovieCard movie={movie} />
  ) : (
    <MobileMovieCard movie={movie} />
  );
}
