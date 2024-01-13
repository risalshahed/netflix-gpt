import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

export default function GPTSearchBar() {
  // store.slice_name.state_property
  const langKey = useSelector(store => store.config.lang);
  // console.log(langKey);
  const dispatch = useDispatch();

  const searchText = useRef(null);

  // 3 search movie in TMDB
  const searchMovieTMDB = async movie => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const data = await res.json();
    // console.log(data);
    return data.results;
  }

  // searchMovie();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(searchText.current.value);

    // gpt query to get movie name from 'searchText'
    const gptQuery = `Act as a Movie Recommendation System and suggest some movies for the query ${searchText.current.value}. Only give me 5 movie names comma separated e.g. "The Fight Club, The Prestige, Inception, Wonder, The Django Unchained"`

    // ----------------------- gpt 3.5 turbo -----------------------
    // 1 Make an API call to get GPT API and get movie results
    const gptResults = await openai.chat.completions.create({
      // movie er naam paite chai search koira, content a 1ta CLEAR query dbo
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices) {
      // handle the error
    }

    // console the result
    // console.log(gptResults.choices[0]?.message?.content);
    /* let gptMovies = gptResults.choices[0]?.message?.content;
    // 2 convert to Array
    gptMovies = gptMovies.split(','); */
    // 2 convert to Array
    const gptMovies = gptResults.choices[0]?.message?.content.split(',');
    // 4 for each movie I will search TMDB API (prottek ta 'movie' er jnnoi amra "searchMovieTMDB" function CALL krbo)
    // const fetchedMovie = gptMovies.map(movie => searchMovieTMDB(movie))
    // ************* eikhane ashole ki hosse? prottek "movie" er jonno 'searchMovieTMDB' function CALL hosse 5 bar kore!
    /* -----------------------------------------------------------
                UNDERSTAND PROMISE OF JAVASCRIPT
    ----------------------------------------------------------- */
    // PROBLEM! see "Promise" of Namaste JavaScript Series in Youtube
    // ************* let's discuss in a nutshell!
    // uporer ei "map" function ashole CALL HOWAAR AGEY TIME NIBEY NAA! Ei 'map' function will make the 5 API calls immediately!!! It WON'T WAIT FOR ONE CALL TO FINISH
    // BUT what about "searchMovieTMDB"??? It will take some time to return the result. Karon, "map" j immediately CALL kore dbe, ei somoye "searchMovieTMDB" kin2 API CALL COMPLETE KORBE NAAA! so "searchMovieTMDB" function er kin2 'result' dekhaite TIME lagbe
    // gptMovies.map(movie => searchMovieTMDB(movie))
    // So, upoer er ei line a, "searchMovieTMDB" will RETURN A PROMISE, NOT THE RESULT
    // the result I will get is "Array of 5 Promises"!
    // [Promise, Promise, Promise, Promise, Promise] (cz, for each movie, there will be a new Promise, 5 Promises for 5 movies)
    // So what is Promise?? Promise will take some time to get the Result
    // ---------------- see the function declaration again ----------------
    /* 
      const searchMovieTMDB = async movie => {
        const res = ... ... ...;
        const data = await res.json();
        return data.results;
      }
    */
    // ei data.results RETURN korte time lagtece, immediately eita RETURN hbe NAA! etai Promise
    // so, etai hoilo PROBLEM! "searchMovieTMDB" will RETURN a Promise NOT the Result

    // const fetchedMovie = await gptMovies.map(movie => searchMovieTMDB(movie));
    // so "fetchedMovie" will RETURN 5 Promises! [Promise, Promise, Promise, Promise, Promise]
    // let's rename the const variable! (as it returns Promise)
    const promiseArray = await gptMovies.map(movie => searchMovieTMDB(movie));
    // so, how to get Actual DATA from this promiseArray??
    // To get Actual DATA, I have to return the result from ALL Promises! With the help of a function "Promise.all()"
    const finalResult = await Promise.all(promiseArray);
    // await kn??? karon ekek ta promise bivinno smy nibe resolve hoite, to shob Promise solve howa prjnto wait kore amra final result ber korbo, ei karonei await dc
    console.log(finalResult);
    // ---------------------------- End of Promise ----------------------------

    // NOW, let's push this final result to our store in order to display this result in UI

    // add gpt movie result
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResult: finalResult }));
  }

  return (
    <div className="pt-24">
      <form
        // handle movie search
        onSubmit={handleSubmit}
        className="bg-gradient-to-tr from-slate-600 to-black w-1/2 mx-auto flex gap-x-4 justify-center items-center"
      >
        {/* *************** "lang" object er mddhe properties ase 'en', 'bn' & 'arb', so, lang.langKey dle ERROR dekhabe! we must access the dynamic property in lang[langKey] way */}
        <input
          ref={searchText}
          type="text"
          className="p-4 mx-1 my-4 w-3/5"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="px-4 py-2 bg-red-700 text-white rounded-md w-1/5">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}