import { GridItem } from './types';



export const extractNShuffleSongs = (items: GridItem[]): string[] => {
  // Shuffle songs in each group first
  const groupedSongs = items.map((item) => shuffleSongs(item.songs));

  // Flatten the songs into a single array
  const allSongs = groupedSongs.flat();

  // Shuffle the combined array of songs
  const shuffledSongs = shuffleSongs(allSongs);

  return shuffledSongs;
};

export const shuffleSongs = (songs: string[]): string[] => {
  // Shuffle the songs array
  const shuffledSongs = [...songs].sort(() => Math.random() - 0.5);

  return shuffledSongs;
};

export const shuffleRemainingSongs = (
  songs: string[],
  selectedSongs: string[]
): string[] => {
  // Filter out the selected songs

  const remainingSongs = songs.filter((song) => !selectedSongs.includes(song));

  // Shuffle the remaining songs
  const shuffledRemainingSongs = shuffleSongs(remainingSongs);

  return shuffledRemainingSongs;
};

export const compareSubmittedWithGameSongs = (
  submittedArray: string[],
  gameArray: string[]
) => {
  console.log(gameArray);
  const isCorrect = gameArray.some((songArray) => {
    return songArray.every(
      (song: string, index: number) => song === submittedArray[index]
    );
  });

  return isCorrect;
};

// export const extractArtists = (items: GridItem[]): string[] => {
//   const artistArray = items.map((item) => item.artists);
//   return artistArray;
// };