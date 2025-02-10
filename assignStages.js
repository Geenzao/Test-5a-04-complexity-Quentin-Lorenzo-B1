interface Artist {
  id: string;
  name: string;
  genre: string;
  stage: string;
}

interface Stage {
  id: string;
  name: string;
  genres: Array<string>;
}

function assignStages(artists, stages) {
  for (let stage of stages) {
    for (let artist of artists) {
      if (stage.genres.includes(artist.genre)) {
        artist.stage = stage.id;
        break;
      }
    }
  }
}