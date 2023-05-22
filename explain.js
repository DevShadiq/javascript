class Episode {
  constructor(title, duration, minutesWatched) {
    this.etitle = title;
    this.eduration = duration;
    // Add logic here
    // ======================
    if (duration === minutesWatched) {
      this.watchedText = "Watched";
      this.continueWatching = false;
    } else if (minutesWatched > 0) {
      this.watchedText = "Watching";
      this.continueWatching = true;
    } else if (minutesWatched == 0) {
      this.watchedText = "Not watched";
      this.continueWatching = true;
    }

    // ======================
  }
}

let firstEpisode = new Episode("Dark Beginnings", 45, 45);
let secondEpisode = new Episode("The Mystery Continues", 45, 10);
let thirdEpisode = new Episode("An Unexpected Climax", 60, 0);
let forthEpisode = new Episode("Story Of Hell", 60, 20);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

episodes.unshift(forthEpisode);

const body = document.querySelector("body");

for (let i in episodes) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("series-frame");
  let newTitle = document.createElement("h2");
  newTitle.innerText = "The Story of Tau";
  let newParagraph = document.createElement("p");
  newParagraph.innerText = `${episodes[i].etitle}
  ${episodes[i].eduration} minutes
  ${episodes[i].watchedText}
  `;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  if (episodes[i].continueWatching) {
    let newButton = document.createElement("button");
    newButton.innerText = "Continue watching";
    newParagraph.append(newButton);
  }
  body.append(newDiv);
}
