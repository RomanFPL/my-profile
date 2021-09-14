import startGlobe from "./modules/globe";
import writeGreetingText from "./modules/textModifier";
import stickMenu from "./modules/menuSticky"

const greetingPhrases = ["Good afternoon!", "Hi there!", "It's nice to meet you!", "Uhh...", "I am Roman Franko and..."];
const mouse = ["Hi, Mouse", "What ara you doing?", "I am a little hungry =(", "And...", "I am coming..."];

writeGreetingText('.greating-part h2', greetingPhrases, false, "s-works");
startGlobe();
stickMenu(".header-nav",".intro");