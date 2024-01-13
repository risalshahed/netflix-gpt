export const USER_AVATAR = 'https://avatars.githubusercontent.com/u/36281118?v=4';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
  }
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500'

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'bn', name: 'Bangla' },
  { identifier: 'arb', name: 'Arabic' },
]

// ********** OPEN AI KEY is not always free, it might be free for maximum of 3 months! After that, it'll be PAID! so, keep this key SECRET so others can't use this key utilizing YOUR MONEY!
// export const OPENAI_KEY = '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'

// it's from the open ai of risal0167@gmail.com
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY