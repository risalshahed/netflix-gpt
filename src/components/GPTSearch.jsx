import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import background from '../assets/background.jpg'

export default function GPTSearch() {
  return (
    <div>
      <div>
        <img className="fixed -z-10 min-h-screen object-cover" src={background} alt="Background" />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  )
}
