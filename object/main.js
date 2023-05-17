/** @format */

// Create a class here

// =====================================

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode('Story of Saeem', 6930, true);
let secondEpisode = new Episode('Story or Gang', 6820, false);
let thirdEpisode = new Episode('Tru Story of Nobel', 680, false);
// =====================================

document.querySelector('#first-episode-info').innerText = `Episode: ${
  firstEpisode.title
}
  Duration: ${firstEpisode.duration} min
  ${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${
  secondEpisode.title
}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${
  thirdEpisode.title
}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
