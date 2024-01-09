import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from 'react-redux';

export default function VideoBackground({ movieId }) {
  // 6.2 get trailer video with useSelector
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  // console.log(trailerVideo);

  // console.log('movie id', movieId);

  useTrailerVideo(movieId);

  return (
    <div>
      {/* 4 */}
      <iframe
        // hover over 'aspect-video', it will show the ratio (w:h -> 16:9)
        className="w-full aspect-video"
        // 6.3
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=nGUKav_iQ2ZxU148&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  )
}