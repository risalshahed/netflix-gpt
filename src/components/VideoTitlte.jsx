import { FaPlay } from "react-icons/fa";

export default function VideoTitlte({ title, overview }) {
  return (
    <div className="pt-36 px-12">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center">
        <FaPlay className="-mr-9 z-20" />
        <button className="shadow-2xl rounded-md bg-white text-lg pl-10 pr-8 py-4 mr-4">
          Play
        </button>
        <button className="shadow-2xl rounded-md bg-gray-500 bg-opacity-80 text-lg text-white px-10 py-4 mr-4">
          More Info
        </button>
      </div>
    </div>
  )
}