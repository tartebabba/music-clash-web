import ConnectionsButtonBar from './ConnectionsButtonBar';
import ConnectionsGrid from './connections-grid';
import { extractNShuffleSongs, shuffleSongs } from './utils';
import { useEffect, useState } from 'react';
import { GameDetails } from './types';

export default function Connections() {
  const [detailsForGame, setDetailsForGame] = useState({
    songsObject: gridItems, // To change to actual data
  });
  const [currentGameDetails, setCurrentGameDetails] = useState<GameDetails>({
    songsForGrid: [],
    selected: [],
    triesRemaining: 4,
  });

  const songs = extractNShuffleSongs(detailsForGame.songsObject);

  useEffect(() => {
    setCurrentGameDetails((prev: GameDetails) => ({
      ...prev,
      songsForGrid: shuffleSongs(songs),
    }));
  }, []);

  function checkGuessCorrect() {
    const sortedSelected = currentGameDetails.selected.sort();
    const sortedGamedSongs = detailsForGame.songsObject.map((artistSongs) =>
      artistSongs.songs.sort()
    );

    const isGuessCorrect = sortedGamedSongs.some((songArray) =>
      songArray.every((song, index) => song === sortedSelected[index])
    );
    return isGuessCorrect;
  }

  const gridComponents = {
    detailsForGame,
    currentGameDetails,
    setCurrentGameDetails,
  };

  return (
    <div>
      <h1>Connections</h1>
      <p>Connections page content</p>
      <ConnectionsGrid {...gridComponents} />
      <ConnectionsButtonBar
        checkGuessCorrect={checkGuessCorrect}
        selectedLength={currentGameDetails.selected.length}
      />
    </div>
  );
}

const gridItems = [
  {
    artists: 'Artist 1',
    songs: [
      'Artist 1 - Song 1',
      'Artist 1 - Song 2',
      'Artist 1 - Song 3',
      'Artist 1 - Song 4',
    ],
  },
  {
    artists: 'Artist 2',
    songs: [
      'Artist 2 - Song 1',
      'Artist 2 - Song 2',
      'Artist 2 - Song 3',
      'Artist 2 - Song 4',
    ],
  },
  {
    artists: 'Artist 3',
    songs: [
      'Artist 3 - Song 1',
      'Artist 3 - Song 2',
      'Artist 3 - Song 3',
      'Artist 3 - Song 4',
    ],
  },
  {
    artists: 'Artist 4',
    songs: [
      'Artist 4 - Song 1',
      'Artist 4 - Song 2',
      'Artist 4 - Song 3',
      'Artist 4 - Song 4',
    ],
  },
];
