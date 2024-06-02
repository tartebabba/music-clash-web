import { GridItem } from './types';

export const extractSongs = (items: GridItem[]): string[] => {
  const songArray = items.flatMap((item) => item.songs);
  return songArray;
};

export const extractArtists = (items: GridItem[]): string[] => {
  const artistArray = items.map((item) => item.artists);
  return artistArray;
};

export const shuffleSongs = (items: string[]): string[] => {
  const shuffledSongs = items.sort(() => Math.random() - 0.5);
  return shuffledSongs;
};
