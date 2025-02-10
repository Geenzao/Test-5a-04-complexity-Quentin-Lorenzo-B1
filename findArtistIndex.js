interface Artist {
  id: string;
  name: string;
}

function findArtistIndex(artists, name) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i].name === name) {
      return artists[i].id;
    }
  }
  return -1;
}

// Je pensais que la création d'une map avait une compléxité de O(n)T c'est pour ca que 
// je n'ai rien proposé comme optimisation sur ma copie
function findArtistIndexOptimize(artists, name) {
  // Création d'une Map pour stocker les artistes
  const artistMap = new Map(
    artists.map(artist => [artist.name, artist.id])
  );

  // Recherche dans la Map du nom de l'artist
  return artistMap.get(name) || -1;
}