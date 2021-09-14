import startGlobe from "./modules/globe";
import writeGreetingText from "./modules/textModifier";
import stickMenu from "./modules/menuSticky"
import CreateProject from "./modules/createProject"

const greetingPhrases = ["Good afternoon!", "Hi there!", "It's nice to meet you!", "Uhh...", "I am Roman Franko and..."];
const mouse = ["Hi, Mouse", "What ara you doing?", "I am a little hungry =(", "And...", "I am coming..."];

writeGreetingText('.greating-part h2', greetingPhrases, false, "s-works");
startGlobe();
stickMenu(".header-nav",".intro");

const projObj = {
    id: 1,
    name: "Something",
    descMain: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi animi magni totam aspernatur veniam voluptatibus corporis at sequi. Eius sequi quas id quasi, eligendi possimus alias veritatis.",
    imgPath: "./assets/img/no-photo.jpeg"
}


new CreateProject(".galery", projObj).render();