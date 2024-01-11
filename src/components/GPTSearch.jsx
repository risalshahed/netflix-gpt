import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import background from '../assets/background.jpg'

export default function GPTSearch() {
  return (
    <div>
      <div>
        <img className="absolute -z-10" src={background} alt="Background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}
