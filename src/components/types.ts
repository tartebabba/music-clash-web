export type GridItem = {
  artists: string;
  songs: string[];
};

export type ConnectionsGridProps = {
  // shuffledSongs: string[];
  detailsForGame: any;
  currentGameDetails: GameDetails;
  setCurrentGameDetails: any;
};

export interface GameDetails {
  songsForGrid: string[];
  selected: string[];
  triesRemaining: number;
}

