import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { IMG_CDN_URL } from '../utils/constants'
 
export default function MovieCard({ movie }) {
  const { original_title, overview, popularity, poster_path, release_date } = movie;
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  if(!movie) return null;
 
  return (
    <div>
      <div className='w-36 md:w-48'>
        <img onClick={handleIsOpen} src={`${IMG_CDN_URL}/${poster_path}`} alt="" />
      </div>
      {/* Modal (Dialog Box) */}
      <Dialog
        open={isOpen}
        handler={handleIsOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{original_title}</DialogHeader>
        <DialogBody>
          <p className="text-black pb-3">{overview}</p>
          <h5 className="text-black">Popularity: <span className="font-semibold">{popularity}</span></h5>
          <h5 className="text-black">Released on: <span className="font-semibold">{release_date}</span></h5>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="blue-gray" onClick={handleIsOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}