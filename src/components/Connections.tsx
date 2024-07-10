import ConnectionsButtonBar from './ConnectionsButtonBar';
import ConnectionsGrid from './connections-grid';
import {
  compareSubmittedWithGameSongs,
  extractNShuffleSongs,
  shuffleSongs,
} from './utils';
import { useEffect, useState } from 'react';
import { currentGameDetails } from './types';
import NavigationBar from './NavigationBar';
import GameTitleBar from './GameTitleBar';
import InfoBar from './InfoBar';
import TriesRemaining from './tries-remaining';

export default function Connections() {
  const [detailsForGame, setDetailsForGame] = useState({
    songsObject: gridItems, // To change to actual data
  });
  const [currentGameDetails, setCurrentGameDetails] =
    useState<currentGameDetails>({
      songsForGrid: [],
      selected: [],
      triesRemaining: 4,
      correctGroups: [],
      guessedGroups: [],
      isGameOver: false,
      isGameWon: false,
    });
  const [showFeedback, setShowFeedback] = useState<{
    show: null | boolean;
    isGuessCorrect: null | boolean;
  }>({
    show: null,
    isGuessCorrect: null,
  });

  const songs = extractNShuffleSongs(detailsForGame.songsObject);

  useEffect(() => {
    setCurrentGameDetails((prev: currentGameDetails) => ({
      ...prev,
      songsForGrid: shuffleSongs(songs),
    }));
  }, []);

  useEffect(() => {
    if (showFeedback.isGuessCorrect !== null) {
      const timer = setTimeout(() => {
        setShowFeedback({ show: null, isGuessCorrect: null });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback.isGuessCorrect]);

  useEffect(() => {
    if (
      currentGameDetails.triesRemaining === 0 &&
      currentGameDetails.correctGroups.length < 4
    ) {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        isGameOver: true,
        isGameWon: false,
      }));
    }

    if (currentGameDetails.correctGroups.length === 4) {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        isGameOver: true,
        isGameWon: true,
      }));
    }
  }, [currentGameDetails.triesRemaining, currentGameDetails.correctGroups]);

  function checkGuessCorrect() {
    const sortedSelected = currentGameDetails.selected.sort();
    const sortedGamedSongs = detailsForGame.songsObject.map((artistSongs) =>
      artistSongs.songs.sort()
    );

    const isGuessCorrect = compareSubmittedWithGameSongs(
      sortedSelected,
      sortedGamedSongs
    );

    console.log(isGuessCorrect);

    if (isGuessCorrect) {
      setCurrentGameDetails((prev: currentGameDetails) => {
        const updatedSongsForGrid = prev.songsForGrid.filter(
          (song) => !sortedSelected.includes(song)
        );

        return {
          ...prev,
          correctGroups: [...prev.correctGroups, sortedSelected],
          selected: [],
          songsForGrid: updatedSongsForGrid,
          triesRemaining: prev.triesRemaining - 1,
        };
      });
      setShowFeedback({ show: true, isGuessCorrect: true });
    } else {
      setCurrentGameDetails((prev: currentGameDetails) => ({
        ...prev,
        selected: [],
        guessedGroups: [...prev.correctGroups, sortedSelected],
        triesRemaining: prev.triesRemaining - 1,
      }));
      setShowFeedback({ show: true, isGuessCorrect: false });
    }
  }

  const gridComponents = {
    detailsForGame,
    currentGameDetails,
    setCurrentGameDetails,
  };

  const buttonBarComponents = {
    checkGuessCorrect,
    selectedLength: currentGameDetails.selected.length,
    setCurrentGameDetails,
  };

  return (
    <div>
      <GameTitleBar />
      <InfoBar />

      <div className="flex items-center justify-center">
        {showFeedback.show && currentGameDetails.triesRemaining !== 0 && (
          <div className="mt-4 flex w-24 items-center justify-center rounded-md bg-black p-1">
            <p className="text-white">
              {showFeedback.isGuessCorrect ? 'Nice!' : 'Try again!'}
            </p>
          </div>
        )}
      </div>

      {currentGameDetails.isGameOver && (
        <p>{currentGameDetails.isGameWon ? 'You won!' : 'You lost!'}</p>
      )}
      <ConnectionsGrid {...gridComponents} />
      <TriesRemaining triesRemaining={currentGameDetails.triesRemaining} />
      <ConnectionsButtonBar {...buttonBarComponents} />
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
