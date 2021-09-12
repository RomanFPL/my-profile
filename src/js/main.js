import startGlobe from "./modules/globe";
import writeGreetingText from "./modules/textModifier";
import stickMenu from "./modules/menuSticky"

const greetingPhrases = ["Good afternoon!", "Hi there!", "It's nice to meet you!", "Uhh...", "I am Roman Franko and..."];

writeGreetingText('.greating-part h2', greetingPhrases);
startGlobe();
stickMenu(".header-nav",".intro");