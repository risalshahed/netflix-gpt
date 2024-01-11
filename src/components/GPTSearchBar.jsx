import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';

export default function GPTSearchBar() {
  // store.slice_name.state_property
  const langKey = useSelector(store => store.config.lang);
  // console.log(langKey);

  return (
    <div className="pt-24">
      <form className="bg-gradient-to-tr from-slate-600 to-black w-1/2 mx-auto flex gap-x-4 justify-center items-center">
        {/* *************** "lang" object er mddhe properties ase 'en', 'bn' & 'arb', so, lang.langKey dle ERROR dekhabe! we must access the dynamic property in lang[langKey] way */}
        <input
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