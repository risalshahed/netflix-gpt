import { FaInfoCircle, FaPlay } from "react-icons/fa";

export default function VideoTitlte({ title, overview }) {
  return (
    <div className="w-full aspect-video pt-48 px-2 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-lg md:text-2xl font-bold">{title}</h2>
      <p className="hidden md:block py-6 text-lg w-1/3">{overview}</p>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center ml-4">
          <FaPlay className="-mr-6 md:-mr-9 z-20 text-black" />
          <button className="shadow-2xl rounded-md bg-white hover:bg-opacity-70 text-lg text-black pl-7 pr-3.5 md:pl-12 md:pr-8 py-1 md:py-4 mr-4 mt-2 md:mt-0">
            Play
          </button>
        </div>
        <div className="flex items-center ml-4">
          <FaInfoCircle className="hidden md:block -mr-9 z-20" />
          <button className="hidden md:block shadow-2xl rounded-md bg-gray-500 bg-opacity-80 hover:bg-opacity-50 text-lg text-white px-10 py-4 mr-4">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}