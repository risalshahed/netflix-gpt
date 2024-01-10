import { IMG_CDN_URL } from '../utils/constants'

export default function MovieCard({ path }) {
  return (
    <div className='w-48'>
      <img src={`${IMG_CDN_URL}/${path}`} alt="" />
    </div>
  )
}