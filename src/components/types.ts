export type GridItem = {
  artists: string;
  songs: string[];
};

export type ConnectionsGridProps = {
  // shuffledSongs: string[];
  detailsForGame: any;
  currentGameDetails: currentGameDetails;
  setCurrentGameDetails: any;
};

export interface currentGameDetails {
  songsForGrid: string[];
  selected: string[];
  triesRemaining: number;
  correctGroups: string[][];
  guessedGroups: string[][];
  isGameOver: boolean;
  isGameWon: boolean;
}

export type GameCardProps = {
  id: number;
  name: string;
  link: string;
  description: string;
  icon?: string;
};