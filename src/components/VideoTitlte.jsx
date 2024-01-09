import { FaInfoCircle, FaPlay } from "react-icons/fa";

export default function VideoTitlte({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center ml-4">
          <FaPlay className="-mr-9 z-20 text-black" />
          <button className="shadow-2xl rounded-md bg-white hover:bg-opacity-70 text-lg text-black pl-10 pr-8 py-4 mr-4">
            Play
          </button>
        </div>
        <div className="flex items-center ml-4">
          <FaInfoCircle className="-mr-9 z-20" />
          <button className="shadow-2xl rounded-md bg-gray-500 bg-opacity-80 hover:bg-opacity-50 text-lg text-white px-10 py-4 mr-4">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}