import { Serie } from "./models/series.js";

export const series: Serie[] = [
  new Serie(
    1,
    "Breaking Bad",
    "AMC",
    5,
    "A high school chemistry teacher turned methamphetamine producer...",
    "https://www.amc.com/shows/breaking-bad",
    "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png"
  ),
  new Serie(
    2,
    "Orange Is the New Black",
    "Netflix",
    6,
    "Convicted of a decade old crime of transporting drug money...",
    "https://www.netflix.com/co/title/70242311",
    "https://upload.wikimedia.org/wikipedia/en/7/7b/Orange_is_the_new_black_title_card.png"
  ),
  new Serie(
    3,
    "Game of Thrones",
    "HBO",
    8,
    "Nine noble families wage war against each other in order to gain control...",
    "https://www.hbo.com/game-of-thrones",
    "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
  )
];
