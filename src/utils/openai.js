import { OpenAI } from "openai";
import { OPENAI_KEY } from "./constants";


const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  // risky! should be kept in the backend/ server side
  dangerouslyAllowBrowser: true
});

export default openai;